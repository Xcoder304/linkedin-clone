import React from "react";
import Avatar from "@mui/material/Avatar";
import { FiPlus } from "react-icons/fi";

import "../../style/home/userinfo.css";
const UserInfo = () => {
  return (
    <div className="Userinfo">
      <div className="userProfile">
        <Avatar src="/broken-image.jpg" className="userProfile__img"></Avatar>

        <span>
          photo of hunter <p>welcome, hunter!</p>
        </span>

        <p>add a photo</p>
      </div>
      <div className="Userinfo__options">
        <span>groups</span>
        <span>
          events <FiPlus className="icon" />
        </span>
        <span>followed hastags </span>
      </div>
    </div>
  );
};

export default UserInfo;
