import React from "react";
import { Outlet } from "react-router-dom";

function Locations() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Locations</h2>
      <Outlet />
    </div>
  );
}

export default Locations;