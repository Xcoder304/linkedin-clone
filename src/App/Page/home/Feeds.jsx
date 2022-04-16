import React from "react";
import "../../style/home/feeds.css";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Feeds = () => {
  return (
    <div className="feeds">
      <CreatePost /> <Post />
    </div>
  );
};

export default Feeds;
