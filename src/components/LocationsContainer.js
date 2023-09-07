import React, { Component } from "react";
import axios from "axios";

class LocationsContainer extends Component {
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
      <div>
        <div className="wrapLocations">
          <ul className="listLocations">
            { this.state.locationsList.map((location) => {
              return (
                <li className="location" location={ location } key={ location.id }>
                  <label>{location.attributes.name}</label>
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    );
  }
}

export default LocationsContainer;