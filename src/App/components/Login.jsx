import React from "react";
import { FcGoogle } from "react-icons/fc";
import "../style/login.css";
import { auth, provider } from "../backend/firebase/config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const SignInTheUser = () => {
    signInWithPopup(auth, provider).catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <header className="login__header">
        <div className="header__logo">
          <img src="../images/logo.png" />
        </div>
      </header>

      <div className="login__body">
        <div className="body__info">
          <h1>welcome to linkedin community</h1>

          <button className="login__btn" onClick={SignInTheUser}>
            <FcGoogle className="icon" />
            <span>sign with google</span>
          </button>
        </div>
        <div className="body__image">
          <div className="imageWapper">
            <img src="../images/loginImg.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
