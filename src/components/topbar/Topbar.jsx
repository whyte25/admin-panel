import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">React Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};
