import React, { useEffect, useState } from "react";
import { createBlog, getAllBlogs, deleteBlog } from "../services/api";
import "../pages/CSS/BlogList.css";

export default function Admincreateblog() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "Fitness",
    thumbnail: "",
    description: "",
    author: user.name || "Admin",
    time_to_read: "5 min",
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await getAllBlogs();
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // temp preview
      setForm({ ...form, thumbnail: imageUrl });

      // 🔒 Optional: if you want to upload to server, use FormData here
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog(form);
      fetchBlogs();
      setForm({
        title: "",
        category: "Fitness",
        thumbnail: "",
        description: "",
        author: user.name || "Admin",
        time_to_read: "5 min",
      });
    } catch (err) {
      console.error("Blog creation failed:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (!user || user.role !== "admin") return <p>Access denied</p>;

  return (
    <div className="blog-admin-container">
      <form className="blog-admin-form" onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
        />

        {/* ✅ File input for image upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {/* ✅ Show preview if selected */}
        {form.thumbnail && (
          <img
            src={form.thumbnail}
            alt="Preview"
            style={{ width: "100px", height: "auto", marginBottom: "10px" }}
          />
        )}

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Content"
          rows={4}
        />
        <input
          name="time_to_read"
          value={form.time_to_read}
          onChange={handleChange}
          placeholder="Time to read"
        />
        <button type="submit">Add Blog</button>
      </form>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog._id || blog.id}>
            <h4>{blog.title}</h4>
            <p>
              {blog.category} - {blog.time_to_read}
            </p>
            <button onClick={() => handleDelete(blog._id || blog.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
