import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="mt-24">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
