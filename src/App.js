import React, { Component } from "react";
import "./App.css";
import LocationsContainer from "./components/LocationsContainer";

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="topHeading">
          <h1>Locations</h1>
        </div>
        <LocationsContainer />
      </div>
    );
  }
}

export default App;