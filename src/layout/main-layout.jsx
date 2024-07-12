import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  let user = null;
  return (
    <>
      <header className="p-5 gap-[40px] bg-blue-400 flex justify-center ">
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/profile"}>Profile</Link>
      </header>
      <main className="h-screen">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
