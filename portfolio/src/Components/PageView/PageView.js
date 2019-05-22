import React from "react";
import "./PageView.css";

class PageView extends React.Component {
  render() {
    return (
      <div className="pageContent">
        <div className="Headings">
          <h2>Naluswata Sharifah</h2>
          <h3>FrontEnd Developer</h3>
        </div>
        <img
          className="imagePic"
          alt="Profile Pic"
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />

        <div className="description">
          <p>
            My name is Naluswata Sharifah. I'm a computer Engineering grad.
            <br />
            Junior Developer at Tyro Software Limited
            <br /> where I am learning React Javascript.
          </p>
        </div>
      </div>
    );
  }
}
export default PageView;
