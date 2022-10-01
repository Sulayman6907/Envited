import React from "react";
import landing from "../../assets/landing.svg"

export default function GenericLanding() {
  return (
    <div className="landing-container">
      <div className="landing-heading">Imagine if <span className="landing-heading-focus">Snapchat</span><br/> had events</div>
      <p className="landing-text"> Easily host and share events with your friends across any social media.</p>
      <div className="landing-image-container">
      <img src={landing} className="landing-image"/>
      </div>
      <div className="landing-button">Create my event</div>
    </div>
  );
}
