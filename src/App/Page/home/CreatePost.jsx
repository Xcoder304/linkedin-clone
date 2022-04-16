import React from "react";
import Avatar from "@mui/material/Avatar";

import "../../style/home/createpost.css";
const CreatePost = () => {
  return (
    <div className="createpost">
      <div className="createpost__top">
        <Avatar alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
        <p>visit profile for hunter</p>
        <span>
          <p>start a post</p>
        </span>
      </div>
      <div className="createpost__options">
        <div className="option">
          <div className="option__img">
            <img src="https://cdn-icons-png.flaticon.com/512/6298/6298051.png" />
          </div>
          <span>photo/video</span>
        </div>

        <div className="option">
          <div className="option__img">
            <img src="https://cdn-icons-png.flaticon.com/512/2983/2983719.png" />
          </div>
          <span>events</span>
        </div>

        <div className="option">
          <div className="option__img">
            <img src="https://cdn-icons.flaticon.com/png/512/3271/premium/3271154.png?token=exp=1650108253~hmac=cbd5084ce45781eb6a9c47d715144e7a" />
          </div>
          <span>write a artical</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
