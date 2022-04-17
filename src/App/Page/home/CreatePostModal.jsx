import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import { MdPhotoLibrary } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../Redux/features/userSlice";
import { selectFileType, setThefileType } from "../../Redux/features/Filetype";
import { setTheLoading } from "../../Redux/features/Loading";
import { db, storage } from "../../backend/firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import "../../style/home/createpostmodal.css";

const CreatePostModal = () => {
  // for getting the user info
  const user = useSelector(selectUser);
  const filetype = useSelector(selectFileType);

  // for dispatching the funtion in redux store
  const dispatch = useDispatch();

  //open open or close the modals
  const [openSeleteImage, setSeleteImage] = useState(false);
  const [openSeleteVideo, setSeleteVideo] = useState(false);

  // for getting the user data
  let [userCaption, setuserCaption] = useState("");
  let [ShareFile, setShareFile] = useState(null);
  let [CurrentFileType, setCurrentFileType] = useState(null);

  // for navigating the user
  const navigate = useNavigate();

  const GetTheFile = (e) => {
    let file = e.target.files[0];
    if (file) {
      setShareFile(file);
    } else {
      alert(`sorry we cant upload ${file.type} format right now`);
    }
  };

  useEffect(() => {
    if (ShareFile) {
      if (
        ShareFile.type == "image/jpeg" ||
        ShareFile.type == "image/gif" ||
        ShareFile.type == "image/jpg" ||
        ShareFile.type == "image/png"
      ) {
        dispatch(
          setThefileType({
            FileType: "image",
          })
        );
        setCurrentFileType("image");
      }
      if (ShareFile.type == "video/mp4") {
        dispatch(
          setThefileType({
            FileType: "video",
          })
        );
        setCurrentFileType("video");
      }
    }
  }, [ShareFile]);

  const UploadImage = () => {
    dispatch(
      setTheLoading({
        Loading: true,
      })
    );
    const storageRef = ref(storage, `images/${ShareFile.name}`);
    const UploadImageTask = uploadBytesResumable(storageRef, ShareFile);

    UploadImageTask.on(
      "state_changed",
      (snapshot) => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => {
        alert(err.message);
      },
      () => {
        getDownloadURL(UploadImageTask.snapshot.ref).then((url) => {
          addDoc(collection(db, "posts"), {
            username: user?.displayName,
            userprofile: user?.photoURL,
            time: serverTimestamp(),
            filetype: filetype.FileType,
            file: url,
            caption: userCaption,
          });
        });
        dispatch(
          setTheLoading({
            Loading: false,
          })
        );
        setuserCaption("");
      }
    );
  };

  const UploadVideo = () => {
    dispatch(
      setTheLoading({
        Loading: true,
      })
    );
    const storageRef = ref(storage, `video/${ShareFile.name}`);
    const UploadVideoTask = uploadBytesResumable(storageRef, ShareFile);

    UploadVideoTask.on(
      "state_changed",
      (snapshot) => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => {
        alert(err.message);
      },
      () => {
        getDownloadURL(UploadVideoTask.snapshot.ref).then((url) => {
          addDoc(collection(db, "posts"), {
            username: user?.displayName,
            userprofile: user?.photoURL,
            time: serverTimestamp(),
            filetype: filetype.FileType,
            file: url,
            caption: userCaption,
          });
        });
        dispatch(
          setTheLoading({
            Loading: false,
          })
        );
        setuserCaption("");
      }
    );
  };

  const handlePost = () => {
    if (CurrentFileType == "image") {
      navigate("/");
      UploadImage();
    }
    if (CurrentFileType == "video") {
      navigate("/");
      UploadVideo();
    }
  };

  return (
    <div className="createpostmodal">
      <div
        className={`createpostmodal__card ${
          ShareFile
            ? "active"
            : openSeleteImage
            ? "active"
            : openSeleteVideo
            ? "active"
            : ""
        }`}
      >
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
            <textarea
              placeholder="What do you want to talk about?"
              onChange={(e) => setuserCaption(e.target.value)}
            ></textarea>
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
              {CurrentFileType == "image" && (
                <div className="seleteimage__imagewapper">
                  <img src={URL.createObjectURL(ShareFile)} />
                </div>
              )}
              <h4 style={{ marginTop: "7px" }}>{ShareFile?.name}</h4>
              <input
                type="file"
                id="image"
                style={{ visibility: "hidden" }}
                accept="image/*"
                onChange={GetTheFile}
              />
            </div>
          )}

          {/* video */}
          {openSeleteVideo && (
            <>
              <div className="seleteImage">
                <h5>Upload video</h5>
                <input type="text" placeholder="Add The Video Url" />
                <h5>or</h5>
                <label htmlFor="video" className="selete__imageBtn">
                  selete an video
                </label>
                {/* <h4 style={{ marginTop: "7px" }}>{video?.name}</h4> */}
                <input
                  type="file"
                  id="video"
                  accept="video/*"
                  style={{ visibility: "hidden" }}
                  onChange={GetTheFile}
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
          <button className="createpostmodal__postBtn" onClick={handlePost}>
            post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
