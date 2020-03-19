import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import NavBar from './component/NavBar'
import clip from './img/clip.png'
import linkedin from './img/linkedin-icon-1.svg'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div class="container">
        <div class="title">
          <img src={clip} class="profile" alt="Profile Picture"></img>
          <h1 class="title-header">Hi, I'm Brian.</h1>
          <h2>An aspiring full-stack web developer based in Toronto, Canada.</h2>
          <h3 class="title-blurb">Computer Hardware | Keyboard Enthusiast</h3>
          <a href="https://www.linkedin.com/in/blacdoo/">
            <img src={linkedin} width="30px"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
