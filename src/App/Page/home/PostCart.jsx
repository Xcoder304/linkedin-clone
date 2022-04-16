import React from "react";
import Avatar from "@mui/material/Avatar";
import { GrLike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import ReactPlayer from "react-player";

const PostCart = () => {
  return (
    <div className="postcard">
      <div className="postcard__top">
        <div className="postcard__userinfo">
          <Avatar alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
          <span>
            <h5>Name</h5>
            <p>Date</p>
          </span>
        </div>

        <div className="postcard__caption">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            laudantium!
          </p>
        </div>

        <div className="postcard__file">
          {/* <img
            src="https://media-exp1.licdn.com/dms/image/sync/C4D22AQGrui6YruHA2w/feedshare-shrink_800/0/1648141321044?e=2147483647&v=beta&t=_HhyQmQoYnNPqeRnZqvtwKQGsoQThl6ACoeog0hSsHA"
          className="file_image"
           
          /> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=RDV3Z1KCBvo&t=401s"
            className="file_video"
            controls
            playing={true}
            loop={false}
            muted={true}
            autoplay={true}
          />
        </div>

        <div className="postcard__status">
          <span>
            <p>10</p>
            <p>likes</p>
          </span>
          <span>
            <p>40</p>
            <p>comments</p>
          </span>
        </div>

        <div className="postcard__options">
          <div className="option">
            <GrLike className="icon" />
            <span>like</span>
          </div>

          <div className="option">
            <MdOutlineComment className="icon" />
            <span>comments</span>
          </div>

          <div className="option">
            <FaShare className="icon" />
            <span>share</span>
          </div>

          <div className="option">
            <RiSendPlaneFill className="icon" />
            <span>send</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCart;
