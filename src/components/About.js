import React, { useState, useEffect } from 'react';


// function About(){
//     return(<h1>About</h1>);
// }

// export default About;



const RealEstateList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from your backend API
    fetch('your_backend_api_endpoint')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Real Estate Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <strong>{property.property_type}</strong> in {property.location} - ${property.price} ({property.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealEstateList;