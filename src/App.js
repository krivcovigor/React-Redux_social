import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png" alt="" />
      </header>
      <nav className="nav">
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className="content">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriWG_oeeRiq-inplP0fJz6usbOR1ZzeI0Rw&usqp=CAU" alt="" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post1
            </div>
            <div>
              post2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;