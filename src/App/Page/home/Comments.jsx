import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { db } from "../../backend/firebase/config";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/features/userSlice";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

import "../../style/home/comments.css";

const Comments = ({ id }) => {
  const user = useSelector(selectUser);
  const [Allcomments, setAllcomments] = useState([]);
  let [usercomment, setusercomment] = useState("");

  useEffect(() => {
    const collectionRef = collection(db, "posts", id, "comments");
    const q = query(collectionRef, orderBy("time", "desc"));
    const display = onSnapshot(q, (snapshot) => {
      setAllcomments(
        snapshot.docs.map((data) => ({ id: data.id, data: data.data() }))
      );
    });
  }, [Allcomments]);

  const AddComment = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts", id, "comments"), {
      text: usercomment,
      time: serverTimestamp(),
      username: user?.displayName,
      userprofile: user?.photoURL,
    });
    setusercomment("");
  };

  return (
    <div className="comments">
      {/* send comments */}
      <div className="comments__sendComments">
        <form onSubmit={AddComment}>
          <Avatar
            alt={user?.displayName}
            style={{ textTransform: "capitalize" }}
            src={user?.photoURL}
          ></Avatar>
          <div className="inputFld">
            <input
              type="text"
              placeholder="Add a comment.."
              value={usercomment}
              onChange={(e) => setusercomment(e.target.value)}
            />
            <button className="comments__btn">
              <RiSendPlaneFill className="icon" />
            </button>
          </div>
        </form>
      </div>

      {/* all comments  */}

      <div className="comments__messages">
        {Allcomments.map(({ id, data }) => {
          return <Messages key={id} data={data} />;
        })}
      </div>

      {/*  */}
    </div>
  );
};

const Messages = ({ data }) => {
  return (
    <div className="message">
      <Avatar
        alt={data?.username}
        style={{ textTransform: "capitalize" }}
        src={data?.userprofile}
      ></Avatar>
      <div className="message__body">
        <div className="top">
          <div className="top__left">
            <h4>{data?.username}</h4>
          </div>
          <div className="top__right">
            <p> {new Date(data?.time?.toDate()).toLocaleString()} </p>
            <BiDotsHorizontalRounded className="icon" />
          </div>
        </div>
        <div className="message__text">
          <p>{data?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
