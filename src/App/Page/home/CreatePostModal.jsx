import { useState } from "react";
import { MdClose } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import { MdPhotoLibrary } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/features/userSlice";

import "../../style/home/createpostmodal.css";

const CreatePostModal = () => {
  // for getting the user info
  const user = useSelector(selectUser);

  //open open or close the modals
  const [openSeleteImage, setSeleteImage] = useState(false);
  const [openSeleteVideo, setSeleteVideo] = useState(false);

  // for navigating the user
  const navigate = useNavigate();

  return (
    <div className="createpostmodal">
      <div className="createpostmodal__card">
        <div className="createpostmodal__top">
          <h4>Create a post</h4>
          <span className="closeIcon" onClick={() => navigate(-1)}>
            <MdClose className="icon" />
          </span>
        </div>
        <div className="createpostmodal__body">
          <div className="body__userprofile">
            <Avatar alt={user?.displayName} src={user?.photoURL}></Avatar>
            <span>{user?.displayName}</span>
          </div>

          <div className="body__text">
            <textarea placeholder="What do you want to talk about? "></textarea>
          </div>

          {/* seleted image or video */}

          {/* image */}
          {openSeleteImage && (
            <div className="seleteImage">
              <h5>Upload Image</h5>
              <input type="text" placeholder="Add The Image Url" />
              <h5>or</h5>
              <label htmlFor="image" className="selete__imageBtn">
                selete an image
              </label>
              {/* <h4 style={{ marginTop: "7px" }}>{fileName.name}</h4> */}
              <input type="file" id="image" style={{ visibility: "hidden" }} />
            </div>
          )}

          {/* video */}
          {openSeleteVideo && (
            <>
              <div className="seleteImage">
                <h5>Upload video</h5>
                <input type="text" placeholder="Add The Video Url" />
                <h5>or</h5>
                <label htmlFor="image" className="selete__imageBtn">
                  selete an video
                </label>
                {/* <h4 style={{ marginTop: "7px" }}>{fileName.name}</h4> */}
                <input
                  type="file"
                  id="image"
                  style={{ visibility: "hidden" }}
                  // onChange={GetTheFile}
                />
              </div>
            </>
          )}
        </div>
        <div className="createpostmodal__footer">
          <div className="Mediabuttons">
            <span
              onClick={() => {
                setSeleteImage(!openSeleteImage);
                setSeleteVideo(false);
              }}
            >
              <MdPhotoLibrary className="icon" />
              <p>photo</p>
            </span>

            <span
              onClick={() => {
                setSeleteVideo(!openSeleteVideo);
                setSeleteImage(false);
              }}
            >
              <AiFillYoutube className="icon" />
              <p>video</p>
            </span>
          </div>
          <button className="createpostmodal__postBtn">post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
