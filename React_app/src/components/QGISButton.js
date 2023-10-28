import React from 'react';
import "../styles/QGISButton.css";
const QGISButton = () => {
  const downloadQGISProject = () => {
    // Specify the path to your QGIS project file in the public folder
    const projectFilePath = process.env.PUBLIC_URL + '/newproject.qgz';

    // Create an anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = projectFilePath;
    anchor.download = 'newproject.qgz'; // Set the downloaded file's name
    anchor.click();
  };

  return (
    <div className="container">
      
      <button className="button" onClick={downloadQGISProject}>
        OPEN QGIS
      </button>
    </div>
  );
};

export default QGISButton;