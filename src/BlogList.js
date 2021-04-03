import React from "react";
import "./BlogList.css";
// import imageOne from "./image/one.png";

function BlogList({ image, date, heading, paraText }) {
  return (
    <div className="container">
      <div className="card">
        <div className="imgBox">
          <img src={image} alt="blog__image" />
        </div>
        <div className="content">
          <h4>{date}</h4>
          <h3>{heading}</h3>
          <p>{paraText}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
