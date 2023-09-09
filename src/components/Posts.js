import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class Posts extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Blog</h2>
        <Outlet />
      </div>
    );
  }    
}

export default Posts;