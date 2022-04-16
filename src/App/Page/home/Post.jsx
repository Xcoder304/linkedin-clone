import { useEffect, useState } from "react";
import PostCart from "./PostCart";
import "../../style/home/post.css";

import { db } from "../../backend/firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Post = () => {
  const [posts, setposts] = useState([]);

  // useEffect(() => {
  //   const collectionRef = collection(db, "post");
  //   const q = query(collectionRef)
  //   const display  = onSnapshot(q,(snapshot) => {

  //   })
  // }, [db]);

  return (
    <div className="Post">
      <PostCart />
    </div>
  );
};

export default Post;
