import React from 'react';

const Sidebar = ({ tools, selectTool }) => {
  return (
    <div className="sidebar" style={{ width: '200px', borderRight: '1px solid black' }}>
      <h4 style={{'font-size': '2em'}} className="center-align">Arcpy on basic license</h4>
      <ul className="collection">
        {tools.filter(tool => tool.type === 'arcpy').map((tool) => (
          <li key={tool.id} className="collection-item">
            <button className="btn-small" onClick={() => selectTool(tool.id)}>{tool.name}</button>
          </li>
        ))}

      </ul>
      <h4 style={{'font-size': '2em'}}  className="center-align">Unique tools</h4>
      <ul className="collection">
      {tools.filter(tool => tool.type === 'private').map((tool) => (
          <li key={tool.id} className="collection-item">
            <button className="btn-small" onClick={() => selectTool(tool.id)}>{tool.name}</button>
          </li>
        ))}

      </ul>

    </div>
  );
};

export default Sidebar;