import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Infobox from './component/Infobox';
import LineGraph from './component/LineGraph';
import Map from './component/Map';
import Table from './component/Table';
import { sortData } from './util';
import 'leaflet/dist/leaflet.css';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapCountries, setMapCountries] = useState([]);
  // const [mapCenter, setMapCenter] = useState([22, 77]);
  const [mapZoom, setMapZoom] = useState(3);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url = countryCode == 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapZoom(2);
        const lat = data.countryInfo.lat;
        const long = data.countryInfo.long;
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
  console.log(countryInfo);
  //   !Fetch data for world wide cases
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesDate = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
          setMapCountries(data);
        });
    };
    getCountriesDate();
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        {/* app_header */}

        <div className="app__header">
          <h1>Covid-19-tracker</h1>

          <FormControl className="app_dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
              <MenuItem value="worldwide">World Wide</MenuItem>

              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* app_stats */}
        <div className="app__stats">
          <Infobox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />

          <Infobox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />

          <Infobox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>

        {/* //!app_map */}
        <Map countries={mapCountries} casesType='cases' center={mapCenter} zoom={mapZoom} />
      </div>
      <div className="app__right">
        <Card>
          <CardContent>
            <h3>Live cases by country</h3>
            <Table countries={tableData} />

            <h3>worldwide new cases</h3>
            <LineGraph />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
//  https://disease.sh/v3/covid-19/all
//  https://disease.sh/v3/covid-19/countries
