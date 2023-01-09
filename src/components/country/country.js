import React from 'react';
import './country.css'
const Country = (props) => {
  console.log(props.country)
  const { name, area, population, capital, flags,region } = props.country
  return (
    <div className='country'>
      <h1>Country Name: {name.common}</h1>
      <p><img src={flags.png} alt="" srcset="" /></p>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Area: {capital}</p>
    </div>
  );
};

export default Country;