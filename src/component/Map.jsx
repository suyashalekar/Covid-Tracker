import React, { useEffect, useState } from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import '../css/Map.css';
import { showDataOnMap } from '../util';

function Map({ countries, casesType, center, zoom }) {
  console.log(`this is a map = ${center}`);
  // console.log(`this is a map = ${center.lat} , ${center.lng}`);
  const [center1, setCenter1] = useState(center);
  useEffect(() => {
    setCenter1(center);
  });

  return (
    <div className="map">
      <LeafletMap center={center1} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;

// import React from 'react';
// import '../css/Map.css';
// import { Map as LeafletMap, TitleLayer } from 'react-leaflet';

// function Map() {
//   return (
//     <div className="map">
//       <LeafletMap>
//         <TitleLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
//       </LeafletMap>
//     </div>
//   );
// }

// export default Map;
