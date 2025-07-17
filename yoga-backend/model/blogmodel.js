import {db} from "../config/db.js";

export const createBlog = async (blog) => {
  const { title, category, thumbnail, description, author, time_to_read } = blog;
  return await db.execute(
    "INSERT INTO blogs (title, category, thumbnail, description, author, time_to_read) VALUES (?, ?, ?, ?, ?, ?)",
    [title, category, thumbnail, description, author, time_to_read]
  );
};

export const getAllBlogs = async () => {
  const [rows] = await db.execute("SELECT * FROM blogs ORDER BY published_at DESC");
  return rows;
};

export const getBlogById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM blogs WHERE id = ?", [id]);
  return rows[0];
};

export const updateBlog = async (id, blog) => {
  const { title, category, thumbnail, description, author, time_to_read } = blog;
  return await db.execute(
    "UPDATE blogs SET title=?, category=?, thumbnail=?, description=?, author=?, time_to_read=? WHERE id=?",
    [title, category, thumbnail, description, author, time_to_read, id]
  );
};

export const deleteBlog = async (id) => {
  return await db.execute("DELETE FROM blogs WHERE id=?", [id]);
};
