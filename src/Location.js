import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Location() {
  const [locationDetails, setLocationDetails] = useState();
  const { slug } = useParams();

  useEffect(() => {
    function getLocationDetails() {
      axios.get(`/locations/${slug}/observations`)
      .then((resp) => {
        setLocationDetails(resp.data.data[0]);
      });
    }

    if (!locationDetails) {
      getLocationDetails();
    }
  }, []);
  
  console.log(`Location Details is ${locationDetails}`);

  return (
    <div style={{ padding: 20 }}>
      { locationDetails ? locationDetails.attributes.description : 'Loading ...' }
    </div>
  );
}

export default Location;