import React from 'react';
import './Country.css'

const Country = (props) => {
  const { name, capital, alpha3Code } = props.country;
  return (
            <div className='country'>
              <h2>Name: {name}</h2>
              <h4>Capital: {capital}</h4>
              <h4>Alpha Code: {alpha3Code}</h4>  
            </div>
          );
};

export default Country;