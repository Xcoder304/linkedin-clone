import React from "react";
import Avatar from "@mui/material/Avatar";

import "../../style/home/userinfo.css";
const UserInfo = () => {
  return (
    <div className="Userinfo">
      <div className="userProfile">
        <Avatar alt="Remy Sharp" src="/broken-image.jpg"></Avatar>

        <span>
          photo of hunter <p>welcome, hunter!</p>
        </span>

        <p>add a photo</p>
      </div>
    </div>
  );
};

export default UserInfo;
