import React from "react";

import "../../css/_reusable/SocialMedia.css";

import linkedin from "../../assets/pictures/linkedin.png";
import github from "../../assets/pictures/github.png";

const SocialMedia = () => {
  return (
    <div className="socila_media_container">
      <a
        href="https://www.linkedin.com/in/poirrier-alexandre/"
        title="Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" className="social_media_logo" />
      </a>
      <a
        href="https://github.com/AlexPOIRRIER"
        title="GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="GitHub" className="social_media_logo" />
      </a>
    </div>
  );
};

export default SocialMedia;
