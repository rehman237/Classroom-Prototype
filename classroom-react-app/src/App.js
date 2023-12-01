import React from "react";
import { Fragment } from "react";
import "./App.css";
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
function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <a href="#" className="logo">
              <img src="/photos/lorem.jpg" alt="" />
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
            <a href="" className="logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </nav>

      <section className="main">
        <div className="main-top">
          <h1 style={{ fontWeight: 500 }}>STATS</h1>
          <i className="fas fa-user-cog"></i>
        </div>
        <div className="main-skills">
          <div className="card">
            <h3 style={{ marginTop: "30px", fontWeight: 400 }}>Rooms</h3>
            <p style={{ fontSize: "50px" }}>10</p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: "30px", fontWeight: 400 }}>Plan minutes</h3>
            <p style={{ fontSize: "50px" }}>0</p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: "30px", fontWeight: 400 }}>
              Audio minutes
            </h3>
            <p style={{ fontSize: "50px" }}>0</p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: "30px", fontWeight: 400 }}>
              Recording minutes
            </h3>
            <p style={{ fontSize: "50px" }}>0</p>
          </div>
        </div>
        <section className="main-course">
          <button>Create room</button>
          <div className="course-box">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Room Name</th>
                  <th>STATE</th>
                  <th>Start time (UTC)</th>
                  <th>End Time(UTC)</th>
                  <th>Duration</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="url">dkyuast</a>
                  </td>
                  <td>ended</td>
                  <td>Nov-21-2022 5:58</td>
                  <td>Nov-21-2022 7:58</td>
                  <td>2</td>
                  <td>view</td>
                </tr>
                <tr>
                  <td>
                    <a href="url">dkyuast</a>
                  </td>
                  <td>ended</td>
                  <td>Nov-21-2022 5:58</td>
                  <td>Nov-21-2022 7:58</td>
                  <td>2</td>
                  <td>view</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;

// TODO
// Massage: convert index html (design prototype) and add here
// Massage: copy all photos in photos folder like logo in this file

// Feature 1: Create nav bar functionailty, better to have separate file for navbar but here in app.js also ok
// Feature 2: Create stats widgets Section
// Feature 3: Create table section
// Feature 4: test with dummy data
