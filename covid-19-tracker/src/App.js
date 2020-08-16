import React, {useEffect, useState} from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import './App.css';

function App() {
 const [countries, setCountries] = useState([
     'USA', 'UK', 'INDIA'
 ]);

 // STATE = How to write a variable in REACT <<<<<

 // https://disease.sh/v3/covid-19/countires

 // USEEFFECT = Runs a piece of code based on a given condition

 useEffect(() => {
   // The code inside here will run once when the component loads and not again
 }, [countries]);

  return (
    <div className="app">
        <div className="app_header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl classname="app_dropdown">
                <Select variant="outlined" value="abc">
                    {/* Loop through all the countries and show a drop down list of the options */}

                    {
                        countries.map(country => (
                        <MenuItem value="country">{country}</MenuItem>
                        ))
                    }

                    {/*<MenuItem value="worldwide">Worldwide</MenuItem>*/}
                    {/*<MenuItem value="worldwide">Option 2</MenuItem>*/}
                    {/*<MenuItem value="worldwide">Option 3</MenuItem>*/}
                    {/*<MenuItem value="worldwide">Yo</MenuItem>*/}
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