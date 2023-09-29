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
                <p className="textBlock">
                    <div className="typeWriter">
                            <span className="type landingTextSmall get">Get</span>{" "}
                            <br className="breakAlt"/>
                            <span className="type big tier typeWriterH2">{text}</span>
                            <span className="type landingText">
                                <Cursor />
                            </span>
                    </div>
                        <span className="big landingText">Pooling All </span>   
                        <br />      
                        <span className="big ques landingText"> OA Questions</span>
                        <span className="small landingTextSmall">from</span>
                        <br className="break"/>
                        <span className="big tier landingText">TIER-1 Colleges</span>
                        <br className="break"/>
                        <span className="small bottom landingTextSmall"> across</span>
                        <span className="big india landingText">India</span>
                    <div className="button1">
                        
                    <button className="btn startBtn" onClick={() => navigator("/login")}>
                        Start Solving
                    </button>

                    </div>
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