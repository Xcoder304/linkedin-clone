import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import ReactPlayer from "react-player";
import Comments from "./Comments";
import { db } from "../../backend/firebase/config";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/features/userSlice";
import {
  collection,
  onSnapshot,
  query,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const PostCart = ({
  id,
  caption,
  file,
  filetype,
  username,
  userprofile,
  time,
}) => {
  const user = useSelector(selectUser);
  const [OpenComments, setOpenComments] = useState(false);
  const [TotalComments, setTotalComments] = useState([]);
  const [TotalLikes, setTotalLikes] = useState([]);
  const [hasLiked, sethasLiked] = useState(false);

  // getting all comments
  useEffect(() => {
    onSnapshot(query(collection(db, "posts", id, "comments")), (snapshot) => {
      setTotalComments(snapshot.docs);
    });
  }, [OpenComments]);

  useEffect(() => {
    onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) => {
      setTotalLikes(snapshot.docs.map((data) => data));
    });
  }, []);

  useEffect(() => {
    sethasLiked(TotalLikes.findIndex((like) => like?.id == user?.uid) != -1);
  });

  const LikeThePost = async () => {
    if (hasLiked) {
      deleteDoc(doc(db, "posts", id, "likes", user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", user?.uid), {
        username: user?.displayName,
      });
    }
  };

  return (
    <div className="postcard">
      <div className="postcard__top">
        <div className="postcard__userinfo">
          <Avatar alt={username} src={userprofile}></Avatar>
          <span>
            <h5>{username}</h5>
            <p>{new Date(time?.toDate()).toLocaleDateString()}</p>
          </span>
        </div>

        <div className="postcard__caption">
          <p>{caption}</p>
        </div>

        <div className="postcard__file">
          {filetype == "image" ? (
            <img src={file} className="file_image" />
          ) : filetype == "video" ? (
            <ReactPlayer
              url={file}
              className="file_video"
              controls
              playing={true}
              loop={false}
              muted={true}
              width="97%"
            />
          ) : (
            ""
          )}

          {/*  */}
        </div>

        <div className="postcard__status">
          <span>
            <p>{TotalLikes.length}</p>
            <p>likes</p>
          </span>
          <span>
            <p>{TotalComments.length}</p>
            <p>comments</p>
          </span>
        </div>

        <div className="postcard__options">
          <div className="option" onClick={LikeThePost}>
            {hasLiked ? (
              <AiFillLike className="icon active" />
            ) : (
              <AiOutlineLike className="icon" />
            )}
            <span>like</span>
          </div>

          <div
            className="option"
            onClick={() => setOpenComments(!OpenComments)}
          >
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
        {OpenComments && <Comments id={id} />}
      </div>
    </div>
  );
};

export default PostCart;
