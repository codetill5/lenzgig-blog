import React from 'react';
import "./BlogHeader.css";
import headerImage from "./image/blogHeader.png";

function BlogHeader() {
    return (
        <div className="header">
            <h1>LenzGig <span className="heading">Blog</span></h1>
            <h4>Apr 01, 2021</h4>
            <h2>Product Hunt Launch</h2>
            <img className="header__img" src={headerImage} alt="header" />
            <p>All details about LenzGig's launch on Product Hunt on 6 April, 2021.</p>
        </div>
    )
}

export default BlogHeader;