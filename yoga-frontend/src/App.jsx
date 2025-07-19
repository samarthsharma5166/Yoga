// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Public Pages

import HomePage from "./pages/Home";
import BlogList from "./pages/BlogList";
import Contact from "./pages/Contact";
import Pricing from "./pages/pricing";
import LiveStreamPage from "./pages/LiveStreamPage";
import About from "./pages/About";
import Mainslider from "./pages/mainslider";
import RefundPolicy from "./pages/Return&refund";
import MentalWellness from "./pages/mentalhealth";
import Nutrition from "./pages/Nutrition";
import Physical from "./pages/Physical";
import Lifestyle from "./pages/Lifestyle";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Greet from "./pages/Greet.jsx"
import AuthLayout from "./Layout/AuthLayout.jsx";
import Register from "./components/Register";
import Login from "./components/login";
// Admin Pages
import AdminDashboard from "./Admin/AdminDashboard";
import Admincreateblog from "./Admin/admincreateblog";
import Manageuser from "./Admin/UserMange";
import Refferal from "./Admin/Referral";

// User Pages
import ClassBooking from "./pages/ClassBooking.jsx";
import DemoBooking from "./pages/DemoBooking";
import UserDashboard from "./User/Userdashboard";

// Layouts
import AdminLayout from "./Layout/AdminLayout.jsx";
import UserLayout from "./Layout/Userlayout";

// Shared Components
import Navbar from "./pages/Navbar";
import Footer from "./components/Footer";
import ManageClasses from "./Admin/ManageClasses";

function AppContent() {
  const location = useLocation();
  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/user");

  return (
    <>
      {!hideLayout && <Navbar />}
      <div style={{ marginTop: "70px" }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="greet" element={<Greet/>}/>
            <Route path="login" element={<Login />} />
          </Route>
          
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/livestream" element={<LiveStreamPage />} />
          <Route path="price" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/mainslider" element={<Mainslider />} />
          <Route path="/returnrefund" element={<RefundPolicy />} />
          <Route path="/mentalhealth" element={<MentalWellness />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/physical" element={<Physical />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />

          {/* Admin Routes with Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="create-blog" element={<Admincreateblog />} />
            <Route path="refferal" element={<Refferal />} />
            <Route path="manage-user" element={<Manageuser />} />
            <Route path="manage-classes" element={<ManageClasses />} />
            <Route path="price" element={<Pricing />} />
          </Route>

          {/* User Routes with Layout */}
          <Route path="/user" element={<UserLayout />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="classbook" element={<ClassBooking />} />
            <Route path="demobook" element={<DemoBooking />} />
            <Route path="price" element={<Pricing />} />
            <Route path="refferal" element={<Refferal />} />
          </Route>
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
