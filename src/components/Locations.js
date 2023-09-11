import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class Locations extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Locations</h2>
        <Outlet />
      </div>
    );
  }
}

export default Locations;