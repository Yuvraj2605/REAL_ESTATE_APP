import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../../Route/Home/Home";
import { Navigate, Outlet } from "react-router-dom";
import "./Layout.scss";
import { AuthContext } from "../../context/AuthContext";
const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="inner">
        <Outlet />
      </div>
    </div>
  );
};

const ProtectRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {!currentUser ? (
        <Navigate to="/login" />
      ) : (
        <div className="layout">
          <Navbar />
          <div className="inner">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export { Layout, ProtectRoute };
