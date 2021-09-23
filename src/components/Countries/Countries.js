import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR2nWYoGbPmQAq2wwdncUCieUPLxzMScvuZxfnLWk9_J5zW7vEwBv6PGuEo')
      .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  
  return (

    <div>
      <h2>Traveling around the world!!</h2>
      <h3>Countires Available: {countries.length}</h3>
      <div className='countries-container'>
      {
        countries.map(country => <Country
          country={country}
          key={country.alpha3Code}
        ></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;