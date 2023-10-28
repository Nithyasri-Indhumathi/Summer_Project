import React from 'react';
import "../styles/QGISResourcesPage.css"
import QGISButton from './QGISButton';
import OpenStreetMapButton from './OpenStreetMapButton';
const QGISResourcesPage = () => {
  return (
    <div>
      <div className="qgis-resources-container">
      <h1>QGIS Resources</h1>
      {/* Display links to QGIS download and documentation */}
      <p>
        Here are the resources you need to download and install QGIS:
        <ul>
        <li><a href="https://qgis.org/en/site/forusers/download.html" className="linkButton">QGIS Download Page</a></li><br />
          <li><a href="https://qgis.org/en/docs/" className="linkButton">QGIS Documentation</a></li><br />
          <li>
            <OpenStreetMapButton />
          </li><br />
          <li>
            <QGISButton />
          </li>
        </ul>
      </p>
      {/* Display additional information about the application */}
      <div className="info">
        <h1>INSTRUCTIONS</h1>
        <li>Follow below instructions to download QGIS</li>
        <li>This application provides a user-friendly interface to manage cultivation in your farmfield. </li>
        <li>After downloading QGIS, you can import/export data between this application and QGIS 
        to manage your farm fields efficiently.</li>
        <li>First of all you have to open qgis app installed on your system</li>
        <li>Then you can give input of your land as shapefile and number of sections to divide in the polygon divider plugin</li>
        <li>And you will get output of divided polygon shaped field based on number of sections</li>
        <li>We hope this heps you!</li>
      </div>
    </div>
    </div>
  );
};

export default QGISResourcesPage;