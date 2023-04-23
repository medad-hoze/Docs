import React from 'react';

import './styles.css';
import GeoAIImage from './GeoAIImage.JPG';

const GeoAI = () => {
  return (
    <div style={{"padding": "2rem;"}} className="container">
      <h1 className="center-align">GeoAI</h1>
      <p>
        GeoAI (Geospatial Artificial Intelligence) is an interdisciplinary field that combines Geographic
        Information Systems (GIS), Remote Sensing, and Artificial Intelligence (AI) to analyze and process
        geospatial data. This powerful combination enables data-driven decision-making, advanced predictive
        analytics, and innovative solutions for various industries, such as agriculture, environmental
        management, urban planning, transportation, and public health.
      </p>
      <p>
        <span style={{"font-size": "20px"}}> This tool </span> is a collection of geospatial tools that use AI to enhance the GIS world. The tools are 
        designed to be user-friendly and easy to use. Designed to be used by anyone, from GIS experts to
        beginners.
      </p>
 
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img
                className="smaller-image"
                src={GeoAIImage} 
                alt="Video thumbnail"
              />
              <a
                href="https://www.youtube.com/watch?v=pF17FTzHR68" 
                className="btn-floating halfway-fab waves-effect waves-light red bigger-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons">play</i>
              </a>
            </div>
            <div className="card-content">
              <span className="card-title">GeoAI Video Tutorial</span>
              <p>
                Learn the basics of GeoAI in this video tutorial. Discover how to analyze and process
                geospatial data using AI techniques.
              </p>
            </div>
          </div>
        </div>

    
    </div>

  );
};

export default GeoAI;

