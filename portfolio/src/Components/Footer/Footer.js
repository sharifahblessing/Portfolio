import React from "react";
import "./Footer.css";
import { Email } from "@material-ui/icons";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footerTop">
          <div className="about">
            <div className="aboutTop">
              <h2>About the Site</h2>
            </div>
            <div className="aboutBottom">
              This is my personal portfolio, if you have any questions or
              <br />
              suggestions feel free to contact me. This was created using <br />
              React JS.
            </div>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <ul>
              <li>
                <Email className="imageIcons" style={{ fill: "black" }} />
                <a
                  href="mailto:snaluswata18@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-mail
                </a>
              </li>
              <li>
                <img
                  className="imageIcons"
                  src={process.env.PUBLIC_URL + "/github.png"}
                  alt="gitLink"
                />
                <a
                  href="http://github.com/sharifahblessing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <img
                  className="imageIcons"
                  src={process.env.PUBLIC_URL + "/linkedin.png"}
                  alt="linkedin"
                />
                <a
                  href="https://www.linkedin.com/in/sharifah-naluswata-926891104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          Copyright © Sharifah.NM 2019. All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
