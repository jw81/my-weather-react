import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostLists from "./components/PostLists";
import Post from "./components/Post";
import NoMatch from "./components/NoMatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Locations from "./components/Locations";
import LocationsList from "./components/LocationsList";
import Location from "./Location";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={ <LocationsContainer />} /> */}
          <Route path="/posts" element={ <Posts /> }>
            <Route index element={ <PostLists /> } />
            <Route path=":slug" element={<Post />} />
          </Route>
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