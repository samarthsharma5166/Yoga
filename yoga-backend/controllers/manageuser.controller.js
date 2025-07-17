import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  toggleStatus,
} from '../model/manageusermodel.js';

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Error in getUsers:", error.message);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

export const createUser = async (req, res) => {
  try {
    await addUser(req.body);
    res.status(201).json({ message: 'User added' });
  } catch (error) {
    console.error("❌ Error in createUser:", error.message);
    res.status(500).json({ message: "Failed to add user" });
  }
};

export const editUser = async (req, res) => {
  try {
    await updateUser(req.params.id, req.body);
    res.status(200).json({ message: 'User updated' });
  } catch (error) {
    console.error("❌ Error in editUser:", error.message);
    res.status(500).json({ message: "Failed to update user" });
  }
};

export const removeUser = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error("❌ Error in removeUser:", error.message);
    res.status(500).json({ message: "Failed to delete user" });
  }
};

export const changeStatus = async (req, res) => {
  try {
    await toggleStatus(req.params.id, req.body.status);
    res.status(200).json({ message: 'Status updated' });
  } catch (error) {
    console.error("❌ Error in changeStatus:", error.message);
    res.status(500).json({ message: "Failed to update status" });
  }
};
