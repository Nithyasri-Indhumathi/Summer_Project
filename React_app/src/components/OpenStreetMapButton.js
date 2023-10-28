import React from 'react';
import "../styles/OpenStreetMap.css";
const OpenStreetMapButton = () => {
  const handleOpenStreetMap = () => {
    window.open('https://www.openstreetmap.org/', '_blank');
  };

  return (
    <button className="button" onClick={handleOpenStreetMap}>
      Open OSM on Google
    </button>
  );
};

export default OpenStreetMapButton;