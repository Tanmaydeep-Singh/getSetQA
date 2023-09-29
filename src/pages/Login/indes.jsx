/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../../utils/lotties/login.json';
import './style.css'

function Login() {
  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:4000/auth/github", "_self");
  };

  return (
    <div className="loginTop">
      <div className="loginWrapper">
        <div className="Lcontainer">
          <Player
            src={animationData}
            className="player"
            loop
            autoplay
            speed={"2"}
            style={{ height: "60vh", width: "auto" }}
          />
          <div className="btnDiv">
            <button className="btn google btn-gradient" onClick={google}>
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />{" "}
              <p className="google-btn-text">Login with Google</p>
            </button>
            <button className="btn github btn-gradient" onClick={github}>
              <img className="github-icon" src="assets\githubLoginImage.png" />
              <p className="git-btn-text">Login with Github</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login