import { Visibility } from "@mui/icons-material";
import React from "react";
import "./WidgetSm.css";

export const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};
