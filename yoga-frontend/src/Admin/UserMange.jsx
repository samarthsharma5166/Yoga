// 📁 src/pages/Admin/ManageUsers.jsx
import React, { useEffect, useState } from 'react';
import {
  getAllUsers,
  createUser,
  deleteUserById,
  updateUserById,
  toggleUserStatus,
} from '../services/api.js';
import './CSS/ManageUser.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', role: 'User', status: 'Active' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getAllUsers();
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this user?')) {
      await deleteUserById(id);
      fetchUsers();
    }
  };

  const handleEdit = (user) => setEditingUser(user);

  const handleBlockToggle = async (user) => {
    const newStatus = user.status === 'Active' ? 'Blocked' : 'Active';
    await toggleUserStatus(user.id, newStatus);
    fetchUsers();
  };

  const handleUpdate = async () => {
    await updateUserById(editingUser.id, editingUser);
    setEditingUser(null);
    fetchUsers();
  };

  const handleAddUser = async () => {
    await createUser(newUser);
    setNewUser({ name: '', email: '', phone: '', role: 'User', status: 'Active' });
    fetchUsers();
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === 'All' || u.status === filter)
  );

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <div className="controls">
        <input placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Active</option>
          <option>Blocked</option>
        </select>
      </div>

      <div className="add-user-form">
        <input placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        <input placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        <input placeholder="Phone" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
        <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
          <option>User</option>
          <option>Instructor</option>
          <option>Admin</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{editingUser?.id === user.id ? <input value={editingUser.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} /> : user.name}</td>
              <td>{editingUser?.id === user.id ? <input value={editingUser.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} /> : user.email}</td>
              <td>{editingUser?.id === user.id ? <input value={editingUser.phone} onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })} /> : user.phone}</td>
              <td>{editingUser?.id === user.id ? (
                <select value={editingUser.role} onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}>
                  <option>User</option><option>Instructor</option><option>Admin</option>
                </select>
              ) : user.role}</td>
              <td>{user.status}</td>
              <td>
                {editingUser?.id === user.id ? (
                  <>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditingUser(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleBlockToggle(user)}>{user.status === 'Active' ? 'Block' : 'Unblock'}</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
