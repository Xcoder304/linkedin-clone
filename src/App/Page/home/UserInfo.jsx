import React from "react";
import Avatar from "@mui/material/Avatar";
import { FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/features/userSlice";

import "../../style/home/userinfo.css";
const UserInfo = () => {
  const user = useSelector(selectUser);

  return (
    <div className="Userinfo">
      <div className="userProfile">
        <Avatar src={user?.photoURL} className="userProfile__img"></Avatar>

        <span>
          photo of {user?.displayName} <p>welcome, {user?.displayName}!</p>
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
