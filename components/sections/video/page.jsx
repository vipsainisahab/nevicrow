import React from "react";
import "./Layout.scss";

const LayoutComponent = () => {
  return (
    <div className="layout-container">
      <div className="content">
        <h1 className="heading">Watch our video</h1>
        <p className="layout-tour">take a tour </p>
        <p className="paragraph">
          Everything was seamless. The private guides were interesting and
          knowledgeable. We felt that they were more than just guides.
        </p>
        <button className="layout-btn">About us</button>
      </div>
      <div className="image-container">
        <img
          src="https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b98c6_beach-429749_1280-p-500.jpeg"
          alt="Example"
        />
      </div>
    </div>
  );
};

export default LayoutComponent;
