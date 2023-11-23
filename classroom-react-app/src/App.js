import logo from "./photos/logo.svg";
import "./App.css";

function App() {
  // TODO
  // Massage: convert index html (design prototype) and add here
  // Massage: copy all photos in photos folder like logo in this file

  // Feature 1: Create nav bar functionailty, better to have separate file for navbar but here in app.js also ok
  // Feature 2: Create stats widgets Section
  // Feature 3: Create table section
  // Feature 4: test with dummy data

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
