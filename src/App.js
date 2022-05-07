import React from 'react'
import imageInSrc from "./imageInSrc.jpg";
import "./style.css";

function App() {
  return (
    <div>
      <div
        style={{
          border: "solid 1px black",
          maxWidth: "100vw",
        }}
      >
        <h1 className="title red">Ahlem Hallouma</h1>
        <br />
        <img className='Image'
          src={imageInSrc}
          alt="imageInSrc"
          style={{
            width: "100%",
            height: "400px",
          }}
        />
        <br />
        <img className='Photo'
          src="/imageInPublic.jpg"
          alt="imageInPublic"
          style={{
            width: "100%",
            height: "600px",
          }}
        />
      </div>

      <video className="video"
        style={{
          width: "100%",
          height: "600px",
        }}
        controls
      >
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
