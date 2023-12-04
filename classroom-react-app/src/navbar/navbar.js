import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faWallet,
  faStream,
  faTasks,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../photos/lorem.jpg";

function ClassRoomNavBar() {

  const handleLogout = () => {
    // Perform logout logic here, such as clearing user session, redirecting, etc.
    console.log('Logging out...');
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
            <span className="nav-item"></span>
          </a>
        </li>

        <li>
          <a href="">
            <FontAwesomeIcon icon={faHome} />
            <span className="nav-item">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faUser} />
            <span className="nav-item">Profile</span>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faWallet} />
            <span className="nav-item">Rooms</span>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faStream} />
            <span className="nav-item">Live Streaming</span>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faTasks} />
            <span className="nav-item">Tasks</span>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faCog} />
            <span className="nav-item">Settings</span>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span className="nav-item">Help</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="nav-item">Log out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ClassRoomNavBar;

// TODO
// Massage: convert index html (design prototype) and add here
// Massage: copy all photos in photos folder like logo in this file

// Feature 1: Create nav bar functionailty, better to have separate file for navbar but here in app.js also ok
// Feature 2: Create stats widgets Section
// Feature 3: Create table section
// Feature 4: test with dummy data
