import React, { Component } from "react";
import "./App.css";
import LocationsContainer from "./components/LocationsContainer";
import Posts from "./components/Posts";
import PostLists from "./components/PostLists";
import Post from "./components/Post";
import NoMatch from "./components/NoMatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={ <LocationsContainer />} />
          <Route path="/posts" element={ <Posts /> }>
            <Route index element={ <PostLists /> } />
            <Route path=":slug" element={<Post />} />
          </Route>
          {/* Now try to reproduce the structure above, but for Locations */}
          <Route path="*" element={  <NoMatch />} />
        </Routes>
      </Router>
    );
  }
}

export default App;