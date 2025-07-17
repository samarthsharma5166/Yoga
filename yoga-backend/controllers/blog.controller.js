import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} from "../model/blogmodel.js";

export const createBlogCtrl = async (req, res) => {
  try {
    await createBlog(req.body);
    res.status(201).json({ message: "Blog created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllBlogsCtrl = async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlogByIdCtrl = async (req, res) => {
  try {
    const blog = await getBlogById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBlogCtrl = async (req, res) => {
  try {
    await updateBlog(req.params.id, req.body);
    res.json({ message: "Blog updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBlogCtrl = async (req, res) => {
  try {
    await deleteBlog(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
