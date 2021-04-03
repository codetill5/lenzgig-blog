import React from 'react';
import './App.css';
import BlogHeader from "./BlogHeader.js";
import BlogList from './BlogList';
import imageOne from "./image/one.png";
import imageTwo from "./image/two.jpg";
import imageThree from "./image/three.jpg";
import imageFour from "./image/four.jpg";
import imageFive from "./image/five.jpg";


function App() {
  return (
    <div className="App">
      <BlogHeader  />
     <BlogList image={imageOne} 
      date="Mar 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
     <BlogList image={imageTwo} 
      date="Feb 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
     <BlogList image={imageThree} 
      date="Mar 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
     <BlogList image={imageFour} 
      date="Mar 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
     <BlogList image={imageFive} 
      date="Mar 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />

<BlogList image={imageOne} 
      date="Mar 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
     <BlogList image={imageTwo} 
      date="Feb 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
     <BlogList image={imageThree} 
      date="Mar 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
     <BlogList image={imageFour} 
      date="Mar 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
     <BlogList image={imageFive} 
      date="Mar 03, 2021"
       heading="Types of AR filters 2021" 
       paraText="There are mainly 5 types of AR filters available for Instagram and
            Snapchat." />
    </div>
  );
}

export default App;
