import React, { useState } from "react";
import './App1.css';

function App() {
  const [view, setView] = useState("portfolio");

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
    "image13.jpg",
    "image14.jpg",
    "image15.jpg",
    "image16.jpg",
    "image17.jpg",
    "image18.jpg",
    "image19.jpg",
    "image20.jpg"
  ];
  
  const setupScrollingEffect = () => {
    function addTransition() {
      this.style.setProperty("transition", "0.6s");
      this.style.setProperty("background-position-y", "200px");
    }
  
    function removeTransition() {
      this.style.removeProperty("transition");
      this.style.removeProperty("background-position-y");
    }
  
    this.addEventListener("mouseover", addTransition);
    this.addEventListener("transitionend", removeTransition);
  };
  

  return (
    <div className="App">
      <div className="menu" style={{ width: "25%" }}>
        <a onClick={() => setView("about")}>About</a>
        <a onClick={() => setView("portfolio")}>Portfolio</a>
      </div>
      <div className="main-content" style={{ width: "75%" }}>
        {view === "about" ? (
          <div className="about">
            <h1>Rui Wang</h1>
            <p>Hi, I'm Rui</p>
          </div>
        ) : (
          <div className="portfolio">
            {images.map((image, index) => (
              <img src={image} alt=":(" onMouseOver={(event) => setupScrollingEffect.call(event.target)} height="200px" width="200px"/>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default App;