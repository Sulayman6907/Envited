import React from "react";
import landing from "../assets/landing.svg";
import { useLocation } from "react-router-dom";

export default function GenericLanding() {
  let history = useLocation()

  const navigate = ()=>{
    history.push("/events")
  }

  return (
    <div className="landing-container">
      <div className="landing-heading">Imagine if <span className="landing-heading-focus">Snapchat</span><br/> had events</div>
      <p className="landing-text"> Easily host and share events with your friends across any social media.</p>
      <div className="landing-image-container">
      <img src={landing} className="landing-image"/>
      </div>
      <div className="landing-button" onClick={navigate}>Create my event</div>
    </div>
  );
}
