import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function HandleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
                w-100
              />
            </div>
          </div>
        </form>

        <h1>New York</h1>
        <ul>
          <li>Wednesday 7:00</li>
          <li>Partly cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
            />
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 15%</li>
              <li>Wind: 2%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "11b44eedfad0402bf5d81a17d7823ce1";
    let city = "Kharkiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
    return "Loading..";
  }
}
