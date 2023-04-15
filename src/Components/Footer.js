import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>© 2022 TinyBytes - All rights reserved</p>
        <div className="footer-icons">
          <img
            alt="image of instagram icon"
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png"
          />
          <img
            alt="image of facebook icon"
            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-128.png"
          />
          <img
            alt="image of twitter icon"
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-128.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
