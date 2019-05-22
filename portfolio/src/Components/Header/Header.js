import React from "react";
import { Work, Business, Home, Contacts } from "@material-ui/icons";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="rightArea">NALUSWATA SHARIFAH</div>
        <div className="leftArea">
          <div className="headerIcons">
            <Home className="selected headerIcon" />
            Home
          </div>
          <div className="headerIcons">
            <Business className="notSelected headerIcon" />
            Experience
          </div>
          <div className="headerIcons">
            <Work className="notSelected headerIcon" />
            Portfolio
          </div>
          <div className="headerIcons">
            <Contacts className="notSelected headerIcon" />
            Contacts
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
