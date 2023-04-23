import React from 'react';

import Find_layers     from '../images/Find_layers.JPG';
import fixCurves       from '../images/fixCurves.JPG';


import polygon_to_line from '../images/polygon_to_line.JPG';
import MultipleClipper from '../images/MultipleClipper.JPG';
import FixRasterEdges  from '../images/FixRasterEdges.JPG';
import MappingLayers  from '../images/MappingLayers.JPG';
import FeatureToPolygon from '../images/FeatureToPolygon.JPG';
import FeatureToVertices from '../images/FeatureToVertices.JPG';
import Split_Line_At_Vertices from '../images/Split_Line_At_Vertices.JPG';
import Split_Line_By_Distance from '../images/Split_Line_By_Distance.JPG';
import aggrigatePolygons from '../images/aggrigatePolygons.JPG';
import Eliminate from '../images/Eliminate.JPG';
import SimplifyPolygons from '../images/SimplifyPolygons.JPG';
import Erase from '../images/Erase.JPG';
import Updateanalysis from '../images/Updateanalysis.JPG';
import CreateTopology from '../images/CreateTopology.JPG';
import Snap from '../images/Snap.JPG';
import Findtheshortestpath from '../images/Findtheshortestpath.JPG';
import curves from '../images/curves.png';

import attachment1     from '../data/attachments/GeometryProblems.pdf';


const ImageMap = {
  'Find_layers.JPG': Find_layers,
  'fixCurves.JPG': fixCurves,
  'FixRasterEdges.JPG': FixRasterEdges,
  'MultipleClipper.JPG': MultipleClipper,
  'MappingLayers.JPG': MappingLayers,
  'polygon_to_line.JPG': polygon_to_line,
  'FeatureToPolygon.JPG': FeatureToPolygon,
  'FeatureToVertices.JPG': FeatureToVertices,
  'Split_Line_At_Vertices.JPG': Split_Line_At_Vertices,
  'Split_Line_By_Distance.JPG': Split_Line_By_Distance,
  'aggrigatePolygons.JPG': aggrigatePolygons,
  'Eliminate.JPG': Eliminate,
  'SimplifyPolygons.JPG': SimplifyPolygons,
  'Erase.JPG': Erase,
  'Updateanalysis.JPG': Updateanalysis,
  'CreateTopology.JPG': CreateTopology,
  'Snap.JPG': Snap,
  'Findtheshortestpath.JPG': Findtheshortestpath,
  "curves.png":curves

}

const pdfMap = {
  'GeometryProblems.pdf': attachment1
};


const ToolCard = ({ tool }) => {

  return (
    <div className="card">

      <div className="card-image">

        <img src={ImageMap[tool.image]} alt={tool.name} />

      </div>
      <div className="card-content">
        <p>
          <a className="waves-effect waves-light btn" href={pdfMap[tool.pdf]} target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </p>
      </div>

      <div className="card-content">
        <span className="card-title">{tool.name}</span>
        <p>{tool.description}</p>
        <h5>Inputs</h5>
        <ul>
          {tool.inputs.map((input, index) => (
            <li key={index}>{input}</li>
          ))}
        </ul>
        <h5>Outputs</h5>
        <ul>
          {tool.outputs.map((output, index) => (
            <li key={index}>{output}</li>
          ))}
        </ul>
      </div>

      <div className="card-content">
        <p>
            <a className="waves-effect waves-light btn" href={tool.link} target="_blank" rel="noopener noreferrer">
              Visit Link
            </a>
        </p>
      </div>

    </div>
  );
};

export default ToolCard;