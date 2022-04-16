import React from "react";
import "../../style/home/rightsec.css";
import Avatar from "@mui/material/Avatar";
import { FiPlus } from "react-icons/fi";

const RightSec = () => {
  return (
    <div className="rightsec">
      <div className="rightsec__follows">
        <div className="rightsec__top">
          <h2>Add to your feed</h2>
        </div>
        <RightSec__Follow
          companyName={"govt job in pakistan"}
          descirption={"Lorem ipsum dolor sit."}
        />
        <RightSec__Follow
          companyName={"govt job in pakistan"}
          descirption={"Lorem ipsum dolor sit."}
        />
        <RightSec__Follow
          companyName={"govt job in pakistan"}
          descirption={"Lorem ipsum dolor sit."}
        />
      </div>

      <div className="rightsec__image">
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" />
      </div>
    </div>
  );
};

const RightSec__Follow = ({ companyName, descirption }) => {
  return (
    <div className="rightsec__follow">
      <Avatar alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
      <span>
        <h3>{companyName}</h3>
        <p>{descirption}</p>
        <button className="rightsec__followBtn">
          <FiPlus />
          <span>follow</span>
        </button>
      </span>
    </div>
  );
};

export default RightSec;
