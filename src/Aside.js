import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { FaClock, FaFolderOpen, FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Aside = ({ toggled, handleToggleSidebar }) => {
  const location = useLocation();
  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      style={{ background: "black" }}
    >
      <SidebarHeader>
        <div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              padding: "15px",
            }}
          >
            <img
              alt="Logo"
              width="50px"
              src="https://i.ibb.co/7CKGfX5/Arizon-logo-2x.jpg"
            />
            <span
              className="MuiTypography-root MuiTypography-button"
              style={{ margin: "10px" }}
            >
              ARIZON Systems
            </span>
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaFolderOpen />}>
            <Link to="/" />
            Projects
          </MenuItem>
          <MenuItem icon={<FaClock />}>
            <Link to="/new-node" />
            Nodes
          </MenuItem>
        </Menu>
      </SidebarContent>
      {location.pathname === "/" ? (
        ""
      ) : (
        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <Link to="/" className="sidebar-btn" rel="noopener noreferrer">
              <FaArrowLeft />
              <span>Back To Dashboard</span>
            </Link>
          </div>
        </SidebarFooter>
      )}
    </ProSidebar>
  );
};

export default Aside;
