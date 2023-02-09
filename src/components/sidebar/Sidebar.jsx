import {
  LineStyle,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  VerifiedUser,
  WorkOutline,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarLIstItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarLIstItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarLIstItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarLIstItem">
                <PermIdentity className="sidebarIcon" />
                User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarLIstItem">
                <Storefront className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <li className="sidebarLIstItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarLIstItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarLIstItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarLIstItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarLIstItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarLIstItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarLIstItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
