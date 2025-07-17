// 📁 components/ManageClasses.jsx
import React, { useState, useEffect } from "react";
import {
  fetchClasses,
  createClass,
  updateClass,
  deleteClass,
} from "../services/api";
import "./CSS/ManageClasses.css";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    class_type: "demo",
    date: "",
    time: "",
    link: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadClasses();
  }, []);

  const loadClasses = async () => {
    const res = await fetchClasses();
    setClasses(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateClass(editingId, form);
    } else {
      await createClass(form);
    }
    setForm({
      title: "",
      class_type: "demo",
      date: "",
      time: "",
      link: "",
      description: "",
    });
    setEditingId(null);
    loadClasses();
  };

  const handleEdit = (cls) => {
    setForm(cls);
    setEditingId(cls.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      await deleteClass(id);
      loadClasses();
    }
  };

  return (
    <div className="manage-classes-container">
      <h2 className="manage-classes-title">
        {editingId ? "Edit" : "Add"} Class
      </h2>
      <form onSubmit={handleSubmit} className="manage-classes-form">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Class Title"
          required
        />
        <select
          name="class_type"
          value={form.class_type}
          onChange={handleChange}
        >
          <option value="demo">Demo</option>
          <option value="paid">Paid</option>
        </select>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
          required
        />
        <input
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="Zoom/YouTube Link"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Class Description"
        />
        <button type="submit">
          {editingId ? "Update Class" : "Add Class"}
        </button>
      </form>

      <h2 className="manage-classes-title">All Classes</h2>
      <table className="classes-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td>{cls.title}</td>
              <td>{cls.class_type}</td>
              <td>{cls.date}</td>
              <td>{cls.time}</td>
              <td>
                <button onClick={() => handleEdit(cls)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cls.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
