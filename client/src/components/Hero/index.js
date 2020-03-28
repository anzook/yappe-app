import React from "react"; 
import "./style.css";

function Hero(props) {
    return (
        <div className="hero text-center" style={{ }}>
            <video className='video'autoPlay muted loop><source type="video/mp4" src="/beach_puppy.mp4"></source></video>
        </div>
    )
}
export default Hero