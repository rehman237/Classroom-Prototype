import React, { useState } from "react";
import "../App.css";
import homeLogo from "../photos/home-logo.png";
import teacher from "../photos/teacher.jpg";

function ClassRoom() {
  const handleCreateRoom = () => {
    // Add logic to handle creating a room
    console.log("Test Creating room...");
  };

  return (
    <section className="main">
      <div class="header">
        <nav>
          <img src={homeLogo} alt="homeLogo" class="logo" />
          <ul>
            <li>
              <i class="fa-solid fa-phone" id="active"></i>
            </li>
            <li>
              <i class="fa-solid fa-video"></i>
            </li>
            <li>
              <i class="fa-solid fa-message"></i>
            </li>
            <li>
              <i class="fa-solid fa-bell"></i>
            </li>
            <li>
              <i class="fa-solid fa-user"></i>
            </li>
            <li>
              <i class="fa-solid fa-gear"></i>
            </li>
          </ul>
        </nav>
        <div class="container">
          <div class="top-icons">
            <i class="fa fa-search"></i>
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="row">
            <div class="col-1">
              <img src={teacher} class="host-img" />
              <div class="controls">
                <i class="far fa-comment"></i>
                <i class="fas fa-phone-slash"></i>
                <i class="fa fa-phone"></i>
                <i class="fa-solid fa-microphone"></i>
                <i class="fa-brands fa-chromecast"></i>
              </div>
            </div>
            <div class="col-2">
              <div class="joined">
                <p>People joined</p>
                <div>
                  <img src="people-1.png" />
                  <img src="people-2.png" />
                  <img src="people-3.png" />
                  <img src="people-4.png" />
                  <img src="people-5.png" />
                </div>
              </div>
              <div class="invite">
                <p>Invite more people</p>
                <div>
                  <img src="user-1.png" />
                  <img src="user-2.png" />
                  <img src="user-3.png" />
                  <img src="user-4.png" />
                  <img src="user-5.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClassRoom;

// TODO
// Massage: convert index html (design prototype) and add here
// Massage: copy all photos in photos folder like logo in this file

// Feature 1: Create nav bar functionailty, better to have separate file for navbar but here in app.js also ok
// Feature 2: Create stats widgets Section
// Feature 3: Create table section
// Feature 4: test with dummy data
