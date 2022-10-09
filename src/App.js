import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Feodosia" />
        <footer>
          This project is coded by Kateryna Kravchuk by guidance of Matt Delac.
          It is{" "}
          <a href="https://github.com/kate-kravchuk/weather-project-react">
            open-sourced on GitHub{" "}
          </a>
          <a href="https://graceful-daifuku-a3b2f5.netlify.app/">
            and deployed on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
