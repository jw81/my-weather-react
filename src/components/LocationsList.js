import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LocationsList() {
  const [locationsListDetails, setLocationsListDetails] = useState();

  useEffect(() => {
    function getLocationsList() {
      axios.get("/locations")
      .then
      ((res) => {
        setLocationsListDetails(res.data.data);
      });
    }

    if (!locationsListDetails) {
      getLocationsList();
    }
  }, []);

  return (
    <ul>
      {
        locationsListDetails ? locationsListDetails.map((location) => {
          return (
            <li key={location.id}>
              <Link to={`/locations/${location.id}`}>
              <h3>{location.attributes.name}</h3>
              </Link>
            </li>
          )
        }) : 'Loading ...'
      }
    </ul>
  );
}

export default LocationsList;