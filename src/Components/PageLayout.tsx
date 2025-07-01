import React from "react";
import NavsideBar from "./NavsideBar";
import { Outlet, useLocation } from "react-router-dom";

const PageLayout = () => {
  const location = useLocation();
  const isDashboardRoot = location.pathname === "/dashboard";
  
  return (
    <div className="min-h-screen">
      {!isDashboardRoot && <NavsideBar />}

      <div className={`p-4 ${!isDashboardRoot ? 'pt-14 pl-[50px]' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
