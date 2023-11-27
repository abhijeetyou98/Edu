import React from "react";
import './SuccessStories.css';
import CommonDiv from "./commonDiv";


function CompetitionResult() {
    return (
<div className='mainContainer'>
        <div className='leftContainer'>
        <div className='button-container'>
      <CommonDiv />
      </div>
        </div>
      <div className='SideButton'>
        <button className='SaveTheChangesBtn'>Save The Changes</button>
        <button className='ResetAllBtn'>Reset All</button>
        <button className='PreviewPageBtn'>Preview Page</button>
        
       <button className='PublishUnpublishBtn'>
    <select className="dropbtn" id="publishUnpublishSelect">
        <option value="Publish">Publish</option>
        <option value="Unpublish">Unpublish</option>
    </select> 
       </button>
        
      </div>
        </div>

    );
}

export default CompetitionResult;