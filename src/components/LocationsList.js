import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationsList: []
    };
  }

  loadLocationsList() {
    axios
      .get("/locations")
      .then((res) => {
        this.setState({ locationsList: res.data.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadLocationsList();
  }

  render() {
    return (
      <ul>
        { this.state.locationsList.map((location) => {
          return (
            <li key={location.id}>
              <Link to={`/locations/${location.id}`}>
                <h3>{location.attributes.name}</h3>
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default LocationsList;