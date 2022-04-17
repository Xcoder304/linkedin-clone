import { useEffect, useState } from "react";
import PostCart from "./PostCart";
import "../../style/home/post.css";

import { db } from "../../backend/firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Post = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef);
    const display = onSnapshot(q, (snapshot) => {
      setposts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, [db]);

  return (
    <div className="Post">
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
