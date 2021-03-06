import React, {useEffect, useState} from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import './App.css';

function App() {
 const [countries, setCountries] = useState([]);
 const [country, setCountry] = useState('worldwide');

 useEffect(() => {
     const getCountriesData = async () => {
         await fetch("https://disease.sh/v3/covid-19/countries")
             .then((response) => response.json())
             .then((data) => {
                 const countries = data.map((country) => ({
                         name: country.country, // United States, United Kingdom, France
                         value: country.countryInfo.iso2, // UK , USA , FR
                     }));

                 setCountries(countries);
             });
     };

     getCountriesData();
 }, []);

 const onCountryChange = async (event) => {
     const countryCode = event.target.value;
     setCountry(countryCode);
 };

  return (
    <div className="app">
        <div className="app_header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl classname="app_dropdown">
                <Select variant="outlined" onChange={onCountryChange} value={country}>
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    {countries.map(country => (
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                        ))}
                </Select>
            </FormControl>
        </div>


        {/* Header */}
        {/* Title + Select input dropdown field*/}

        {/* InfoBoxs */}
        {/* InfoBoxs */}
        {/* InfoBoxs */}

        {/* Table */}
        {/* Graph */}

        {/* Map */}
    </div>
  );
}

export default App;