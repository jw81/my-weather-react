import React, { Component } from "react";
import "./App.css";
import LocationsContainer from "./components/LocationsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LocationsContainer />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;