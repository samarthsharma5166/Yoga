import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // ✅ Backend base URL
});

// ✅ Automatically attach token from localStorage to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ===============================
// ✅ AUTH APIs
// ===============================
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

// ===============================
// ✅ BLOG APIs
// ===============================
export const createBlog = (data) => API.post("/blogs/create", data);
export const getAllBlogs = () => API.get("/blogs/all");
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

// ===============================
// ✅ REFERRAL APIs (if needed)
// ===============================
// export const getReferralLink = (userId) => API.get(`/referrals/link/${userId}`);
// export const getReferralStats = (userId) => API.get(`/referrals/stats/${userId}`);

// ===============================
// ✅ USER PAYMENTS
// ===============================
export const getUserPayments = (userId) => API.get(`/payments/user/${userId}`);

// ===============================
// ✅ MANAGE USERS APIs (Admin)
// ===============================
export const getAllUsers = () => API.get("/manageusers");
export const createUser = (data) => API.post("/manageusers", data);
export const deleteUserById = (id) => API.delete(`/manageusers/${id}`);
export const updateUserById = (id, data) => API.put(`/manageusers/${id}`, data);
export const toggleUserStatus = (id, status) =>
  API.patch(`/manageusers/${id}/status`, { status });

// ===============================
// ✅ MANAGE CLASSES APIs (Admin)
// ===============================
export const fetchClasses = () => API.get("/classes");
export const createClass = (data) => API.post("/classes", data);
export const updateClass = (id, data) => API.put(`/classes/${id}`, data);
export const deleteClass = (id) => API.delete(`/classes/${id}`);

// ===============================
// ✅ BOOKINGS (User Panel)
// ===============================
export const bookClass = (data) => API.post("/bookings/class", data);
export const bookDemo = (data) => API.post("/bookings/demo", data);

export const getUserBookingHistory = (userId) => API.get(`/bookings/user/${userId}`);


export const getAdminStats = () => API.get("/admin/stats");

// ✅ Export main API instance
export default API;
