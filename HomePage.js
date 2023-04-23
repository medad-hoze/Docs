

import gisAI from './Ai_globe.JPG';
import React from 'react';


const HomePage = () => {
  return (
    <div 
        style={{"display": "flex",
                "flex-direction": "column",
                "justify-content": "center",
                "align-items": "center",
                "text-align": "center"}} className="center-content">

      <div className="container">
        <h1 className="center-align">Enhancing the GIS world</h1>
        <p style={{"font-size": "1.3rem"}}>Welcome to the next generation of geoprocessing tools. This project focuses on converting expansive arcpy tools to work with 
            basic licenses by rewriting their algorithms. In addition, we are creating new tools to make GIS processes as automated as 
            possible, saving both time and effort. These tools will enhance the ArcPro platform and its users' capabilities by leveraging 
            AI technologies such as ChatGPT and machine learning for image processing. Our goal is to make GIS faster, more enjoyable, and,
            of course, more cost-effective.</p>
      </div>
      <img
        src={gisAI}
        alt="GIS AI Globe"
        style={{ "maxWidth": "30%", "height": "auto" }}
      />
    </div>
  );
};

export default HomePage;


