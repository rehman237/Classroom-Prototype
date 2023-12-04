import React from "react";
import "./App.css";
import "./classroom/classroom.css";

import ClassRoomNavBar from "./navbar/navbar";
import ClassRoomDashboard from "./dashboard/dashboard";
import ClassRoom from "./classroom/classroom";

function App() {
  return (
    <div className="container">
      <ClassRoom></ClassRoom>
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
