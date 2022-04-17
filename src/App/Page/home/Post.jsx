import { useEffect, useState } from "react";
import PostCart from "./PostCart";
import { selectLoading } from "../../Redux/features/Loading";
import { useSelector } from "react-redux";

import "../../style/home/post.css";

import { db } from "../../backend/firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Post = () => {
  const loading = useSelector(selectLoading);
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("time", "desc"));
    const display = onSnapshot(q, (snapshot) => {
      setposts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, [db]);

  return (
    <div className="Post">
      {loading.Loading && (
        <div className="loader">
          <img src="../images/loader.gif" />
        </div>
      )}
      {posts.map(
        ({
          id,
          data: { caption, file, filetype, username, userprofile, time },
        }) => {
          return (
            <PostCart
              key={id}
              id={id}
              caption={caption}
              file={file}
              filetype={filetype}
              username={username}
              userprofile={userprofile}
              time={time}
            />
          );
        }
      )}
    </div>
  );
};

export default Post;
