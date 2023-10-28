import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

const MapComponent = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    // Fetch data from QGIS Server API
    axios.get('http://localhost/cgi-bin/qgis_mapserv.fcgi?MAP=C:/Users/muthu/Final.qgz&SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAME=your_layer_name')
      .then(response => {
        // Process the data if needed
        setMapData(response.data);
      })
      .catch(error => {
        console.error('Error fetching map data:', error);
      });
  }, []);

  return (
    <Map center={[latitude, longitude]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapData && <GeoJSON data={mapData} />}
    </Map>
  );
};

export default MapComponent;

