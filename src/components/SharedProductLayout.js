import React from "react";
import { Link, Outlet } from "react-router-dom";

const SharedProductLayout = () => {
  return (
    <div className="section">
      <div className="btn-container">
        <button className="btn btn-home">
          <Link to="/">BACK HOME</Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default SharedProductLayout;
