import { Outlet, useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../../utils/lotties/landing.json'
import "./style.css"

function Landing() {
    let navigator = useNavigate();

    const [text] = useTypewriter({
        words: [
            "Google Questions.",
            "Microsoft Questions.",
            "Atlassian Questions.",
            "Sprinklr Questions.",
            "Every Goddam OA...",
        ],
        loop: {},
        typeSpeed: 20,
        delaySpeed: 50,
    });

    return (
        <div className="wrapper">
            <div className="blackDiv">
                <p>
                    <div className="typeWriter">
                            <span className="type landingTextSmall">Get</span>{" "}
                            <span className="type typeWriterH2">{text}</span>
                            <span className="type landingText">
                                <Cursor />
                            </span>
                    </div>
                    <div className="flex inline top">
                        <p className="big landingText">Pooling All </p>
                    </div>

                    <div className="textAlignLander">
                        <p className="big ques landingText"> OA Questions</p>
                        <p className="small landingTextSmall">from</p>
                    </div>

                    <div className=" inline">
                        <p className="big tier landingText">TIER-1 Colleges</p>
                    </div>

                    <div className="textAlignLander">
                        <p className="small bottom landingTextSmall"> across</p>
                        <p className="big india landingText">India</p>
                    </div>
                    <button className="btn startBtn" onClick={() => navigator("/login")}>
                      
                        Start Solving
                    </button>

                </p>

            </div>

            <div className="purpleDiv">
              
                <Player
                    src={animationData}
                    className="player"
                    loop
                    autoplay
                    speed={"2"}
                    style={{ height: "50vh", width: "auto" }}
                />
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default Landing;