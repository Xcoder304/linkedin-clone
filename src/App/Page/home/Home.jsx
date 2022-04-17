import React from "react";
import "../../style/home/home.css";
import Feeds from "./Feeds";
import RightSec from "./RightSec";
import UserInfo from "./UserInfo";

const Home = () => {
  return (
    <div className="home">
      <UserInfo />
      <Feeds />
      <RightSec />
    </div>
  );
};

export default Home;
