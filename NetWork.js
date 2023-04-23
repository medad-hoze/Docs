import React from 'react';

import './styles.css';
import networkImage from './networkImage.JPG';
import networkImage2 from './networkImage2.JPG';

const NetWork = () => {
  return (
    <div style={{"padding": "2rem;"}} className="container">
      <h1 className="center-align">NetWork analysis tool</h1>
      <p>
      The network analysis tool was initially developed to address cadastral issues, efficiently tracking parcel divisions and consolidations. 
      Later, additional capabilities were discovered to monitor changes in large data structures that undergo alterations in both attributes and geometry.
       Consequently, there arose a need to analyze these changes more effectively..
      </p>
      <p>
        <span style={{"font-size": "20px"}}> This tool </span>  consists of two stages: first, it creates a network from the data, and second,
         it analyzes the network to generate reports and visual representations of the changes.
      </p>
 
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
                <div style=
                {{"display": "flex",
                "flex-direction": "row",
                "justify-content": "center",
                "align-items": "center",
                "text-align": "center"}}>

                    <img
                        className="smaller-image"
                        src={networkImage2} 
                        alt="Video thumbnail"
                    />
                    <img
                        className="smaller-image"
                        src={networkImage} 
                        alt="Video thumbnail"
                    />
              </div>
              <a
                href="https://www.youtube.com/watch?v=b8hPMMpFnTU" 
                className="btn-floating halfway-fab waves-effect waves-light red bigger-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons">play</i>
              </a>
            </div>
            <div className="card-content">
              <span className="card-title">network Video Tutorial</span>
              <p>
                Learn the basics of network in this video tutorial. Discover how to analyze and process
                geospatial network data using advanced techniques.
              </p>
            </div>
          </div>
        </div>

    
    </div>

  );
};

export default NetWork;

