import React, { useState } from 'react';
import ToolCard from './components/ToolCard';
import Sidebar from './components/Sidebar';
import toolsData from './data/tools.json';

import informationImg from './information.png';
import toolbox from './toolbox.png';
import toolBox_atbx from './data/kkl_tools.atbx';
import PasswordLogin from "./components/PasswordLogin";

import './App.css';

function Documentation() {
  const [selectedToolId, setSelectedToolId] = useState(null);

  const selectTool = (toolId) => {
    setSelectedToolId(toolId);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  function handlePopupClick() {
    let result = !isPopupVisible;
    setIsPopupVisible(result);
  }
  
  function handleToolBox() {
    handlePopupClick();
  }


  const [loggedIn, setLoggedIn] = useState(false);

  const handlePasswordEntered = () => {
    console.log("Password entered");
    setLoggedIn(true);
  };


  const selectedTool = toolsData.find((tool) => tool.id === selectedToolId);

  return (
    <div>
      {!loggedIn && <PasswordLogin onPasswordEntered={handlePasswordEntered} />}
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo center">Docs</a>
          <img 
              style   = {{"width": "100px"}} 
              src     = {informationImg} 
              onClick = {handlePopupClick}
              target = "_blank" rel="noopener noreferrer"/>
          <b className="brand-logo left">info & download</b>
        </div>
      </nav>
      <div className="container">
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col s12 m4 l3">
            <Sidebar tools={toolsData} selectTool={selectTool} />
          </div>
          <div className="col s12 m8 l9">
            {selectedTool && <ToolCard tool={selectedTool} />}
          </div>
        </div>
        {
        isPopupVisible && loggedIn ?(
      <div className="card">
        <div className="card-content">
          <a className='info' > 
          This tools are made as close as possible to esri arcpy tools,
          but make no use of there algoritheims, 
          so no expansive license are required. addtionaly,
          more usefull tools were added to make your life easier.
          you found bug? somthing is not right? let me know: medadhoze@hotmail.com</a>
        </div>
        <a  href={toolBox_atbx} download>
        <img
              style   = {{"width": "100px", "margin": "auto", "display": "block"}} 
              src     = {toolbox} 
              onClick = {handleToolBox}
               target = "_blank" rel="noopener noreferrer"/>
               </a>
        </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col s12 m6 offset-m3">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Please login</span>
                    <p>
                      In order to access the content, you need to login first. If you
                      don't know the password, plz contact medadhoze@hotmail.com.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        }
  
      </div>
    </div>
  );
}

export default Documentation;