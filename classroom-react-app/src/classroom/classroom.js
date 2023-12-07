import React, { useState } from "react";
import "./classroom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPhoneSlash,
  faMicrophone,
  faChromecast,
  faPhone,
  faVideo,
  faBell,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import homeLogo from "../photos/home-logo.png";
import teacher from "../photos/teacher.jpg";
import people1Img from "../photos/people-1.png";
import people2Img from "../photos/people-2.png";
import people3Img from "../photos/people-3.png";
import people4Img from "../photos/people-4.png";
import people5Img from "../photos/people-5.png";
import user1 from "../photos/user-1.png";
import user2 from "../photos/user-2.png";
import user3 from "../photos/user-3.png";
import user4 from "../photos/user-4.png";
import user5 from "../photos/user-5.png";
function ClassRoom() {
  const handleCreateRoom = () => {
    // Add logic to handle creating a room
    console.log("Test Creating room...");
  };

  return (
    <section className="main">
      <div className="header">
        <nav>
          <img src={homeLogo} alt="homeLogo" className="logo" />
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} id="active" />
            </li>
            <li>
              <FontAwesomeIcon icon={faVideo} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCog} />
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="top-icons">
            <i className="fa fa-search"></i>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="row">
            <div className="col-1">
              <img src={teacher} className="host-img" />
              <div className="controls">
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faPhoneSlash} />
                <FontAwesomeIcon icon={faPhone} />
                <FontAwesomeIcon icon={faMicrophone} />
                <FontAwesomeIcon icon={faChromecast} />
              </div>
            </div>
            <div className="col-2">
              <div className="joined">
                <p>People joined</p>
                <div>
                  <img src={people1Img} alt="People 1" />
                  <img src={people2Img} alt="Person 2" />
                  <img src={people3Img} alt="Person 3" />
                  <img src={people4Img} alt="Person 4" />
                  <img src={people5Img} alt="Person 5" />
                </div>
              </div>
              <div className="invite">
                <p>Invite more people</p>
                <div>
                  <img src={user1} alt="User 1" />
                  <img src={user2} alt="User 2" />
                  <img src={user3} alt="User 3" />
                  <img src={user4} alt="User 4" />
                  <img src={user5} alt="User 5" />
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
