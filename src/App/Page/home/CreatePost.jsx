import React from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/features/userSlice";

import "../../style/home/createpost.css";
const CreatePost = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="createpost">
      <div className="createpost__top">
        <Avatar alt={user?.displayName} src={user?.photoURL}></Avatar>
        <p>visit profile for {user?.displayName}</p>
        <span onClick={() => navigate("/createpost")}>
          <p>start a post</p>
        </span>
      </div>

      <div className="createpost__options">
        <div className="option" onClick={() => navigate("/createpost")}>
          <div className="option__img">
            <img src="https://cdn-icons-png.flaticon.com/512/6298/6298051.png" />
          </div>
          <span>photo/video</span>
        </div>

        <div className="option" onClick={() => navigate("/createpost")}>
          <div className="option__img">
            <img src="https://cdn-icons-png.flaticon.com/512/2983/2983719.png" />
          </div>
          <span>events</span>
        </div>

        <div className="option" onClick={() => navigate("/createpost")}>
          <div className="option__img">
            <img src="https://cdn-icons-png.flaticon.com/512/1355/1355663.png" />
          </div>
          <span>write a artical</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
