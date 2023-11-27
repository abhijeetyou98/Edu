import React, { useState, useEffect } from 'react';
import './IBDPResultsPage.css';
import CommonDiv from './commonDiv'; // Use lowercase 'c' for the filename
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap'; // Import Bootstrap components
import { BiDotsVerticalRounded,BiTrash,BiPencil } from 'react-icons/bi'; // Import icons
import { useNavigate } from 'react-router-dom';

function IBDPResultsPage() {

  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:8080/api/ibdpResults")
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
  .catch((error) => {
    console.error(error);
  });
}, []);

const handleDeleteStudent = async (studentName) => {
  await axios.delete(`http://localhost:8080/api/ibdpResults/${studentName}`)
    .then((response) => {
      setData(data.filter((ibdpResults) => ibdpResults.studentName !== studentName));
    })
    .catch((error) => {
      // Handle any errors that occurred during the delete request.
      console.error("Error deleting student:", error);
    });
};

const handlePublishStudent = (studentName, status) => {
  const updateData = data.map((ibdpResults) => {
    if (ibdpResults.studentName === studentName) {
      return { ...ibdpResults, status };
    }
    return ibdpResults;
  });

  // Update the state with the modified data
  setData(updateData);
};

const navigate = useNavigate();
const createNewIbdpResult = () => {
  const path = '/AddNewIbdpResult';
  navigate(path);
}

  return (

<div className='mainContainer'>
<div className='leftContainerIbdp'>
        <div className='button-container'>
      <CommonDiv />
      </div>

      <div className='editaddtaglineDiv'>
        <p>Edit /Add Success Stories</p>
       <hr></hr>
      </div>

    <div className='tableHeading'>
      <p>Results Showing on Home Page</p>
    </div>
    <div className='tableibdpresult'>
<table>
  <thead>
    <tr className='tabledataheading'>
      <th className='heading'></th> {/* This cell can be empty if needed */}
      <th className='heading'>Student Name</th>
      <th className='heading'>School Name</th>
      <th className='heading'>Year</th>
      <th className='heading'>Levels</th>
      <th className='heading'>Score</th>
      <th className='heading'>IA Score</th>
      <th className='heading'>Action</th>
      <th className='heading'>Status</th>
    </tr>
  </thead>
  <tbody>
    {data.map((result, index) => (
      <tr className='tabledata' draggable="true" key={index}>
        <td className='icon-header'></td> {/* This cell can be empty if needed */}
        <td className='heading'>{result.studentName}</td>
        <td className='heading'>{result.school_Name}</td>
          <td className='heading'>{result.year}</td>
        <td className='heading'>{result.level}</td>
        <td className='heading'>{result.score}</td>
        <td className='heading'>{result.ia_Score}</td>
        <td className='heading'>{result.action}</td>  
        <td className='heading'>
                  <span className="delete" onClick={() => handleDeleteStudent(result.studentName)}>
                    <BiTrash/>
                    </span>
                    <span className='action-button' onClick={handlePublishStudent}>
        <BiDotsVerticalRounded/>
      </span>
     
                    {/* <span>
                      <DropdownButton
                          align="end"
                          title={<BiDotsVerticalRounded />}
                          id={`dropdown-menu-${result.studentName}`}
                          className="action-button">
                            <Dropdown.Item onClick={() => handlePublishStudent(result.studentName, true)}>
                              Published
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePublishStudent(result.studentName, false)}>
                              Unpublished
                            </Dropdown.Item>
                          </DropdownButton>
                    </span> */}
                  </td>
        {/* <td className='heading'>{result.status ? 'Published' : 'Unpublished'}</td> */}
      
        <td className='heading'>
  {result.status ? (
    <div className="dot green-dot" title="Published"></div>
  ) : (
    <div className="dot red-dot" title="Unpublished"></div>
  )}
  {result.status ? 'Published' : 'Unpublished'}
</td>


      </tr>
    ))}
  </tbody>
</table>
    </div>
   <div className='belowTable'>
    <div className='resultsHeadingMain'>
    <p className='resultsHeading'>Results</p>
    </div>
    <div>
    <form>
      <button className='addButton' onClick={createNewIbdpResult}>Add New</button>
      </form>
    </div>

 
    </div>
    <div className='tableibdpresultbelow'>
      <table>
        <thead>
        <tr className='tabledataheadingbelow'>
        <th ></th>
        <th className='heading'>Student Name</th>
        <th className='heading'>School Name</th>
        <th className='heading'>Year</th>
        <th className='heading'>Levels</th>
        <th className='heading'>Score</th>
        <th className='heading'>IA Score</th>
        <th className='heading'>Action</th>
        <th className='heading'>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr className='tabledata' draggable="true">
        <td className='icon-header'></td>
          <td>Diksha</td>
          <td>Bharti School</td>
          <td>2010</td>
          <td>10th</td>
          <td>A</td>
          <td>B</td>
          <td>
            <span><i className="bi bi-trash3-fill"></i></span>
          </td>
          <td>Published</td>
        </tr>
        <tr className='tabledata' draggable="true">
        <td className='icon-header'></td>
          <td>Diksha</td>
          <td>Bharti School</td>
          <td>2010</td>
          <td>10th</td>
          <td>A</td>
          <td>B</td>
          <td>
            <span><i className="bi bi-trash3-fill"></i></span>
          </td>
          <td>Published</td>
        </tr>
        <tr className='tabledata' draggable="true">
        <td className='icon-header'></td>
          <td>Diksha</td>
          <td>Bharti School</td>
          <td>2010</td>
          <td>10th</td>
          <td>A</td>
          <td>B</td>
          <td>
            <span><i className="bi bi-trash3-fill"></i></span>
          </td>
          <td>Published</td>
        </tr>
        
        </tbody>
      </table>
    </div>

        </div> 
        <div className='SideButtonIbdp' rx="0" ry="0" x="100" y="259">
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
  
    
  )
}

export default IBDPResultsPage;
