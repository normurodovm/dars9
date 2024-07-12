import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

export const UserLayout = () => {
  let user = true;

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex">
      <div className="bg-violet-400 flex-col flex gap-4 h-screen p-5">
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/profile/order-list"}>Order List</Link>
        <Link to={"/profile/change-account"}>Change Account</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
