import React from "react";
import NavsideBar from "./NavsideBar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed navbar and sidebar */}
      <NavsideBar />

      {/* Page content shifted to avoid overlapping */}
      <div className="pt-14 pl-[50px] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
