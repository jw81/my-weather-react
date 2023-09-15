import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Location() {
  const [locationDetails, setLocationDetails] = useState();
  const { slug } = useParams();

  useEffect(() => {
    function getLocationDetails() {
      axios.get(`/locations/${slug}/observations/current`)
      .then((resp) => {
        setLocationDetails(resp.data.data);
      });
    }

    if (!locationDetails) {
      getLocationDetails();
    }
  }, []);
  
  console.log(`Location Details is ${locationDetails}`);

  return (
    <div style={{ padding: 20 }}>
      { locationDetails ? 
        <div>
          <div>
            { locationDetails.attributes.description }
          </div>
          <div>
            { locationDetails.attributes.currentTemperature }
          </div>
        </div>
        : 'Loading ...' }
    </div>
  );
}

export default Location;