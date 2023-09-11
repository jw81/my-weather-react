import React, { Component } from "react";
import "./App.css";
import NoMatch from "./components/NoMatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Locations from "./components/Locations";
import LocationsList from "./components/LocationsList";
import Location from "./components/Location";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={ <LocationsContainer />} /> */}
          <Route path="/locations" element={ <Locations /> }>
            <Route index element={ <LocationsList /> } />
            <Route path=":slug" element={ <Location /> } />
          </Route>
          <Route path="*" element={  <NoMatch />} />
        </Routes>
      </Router>
    );
  }
}

export default App;