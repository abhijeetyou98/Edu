import React, { useState } from 'react';
import './AddNewIbdpResult.css'
import { BiArrowBack } from 'react-icons/bi'; // Import icons
import axios from 'axios';


const AddNewIbdpResult = () => {
    const [studentName, setStudentName] = useState('');
    const [school_Name, setSchool_Name] = useState('');
    const [year, setYear] = useState('');
    const [level, setLevel] = useState('');
    const [score, setScore] = useState('');
    const [ia_Score, setIa_Score] = useState('');
    const [status, setStatus] = useState('');

    const url = "http://localhost:8080/api/ibdpResults" ;

    const handleSubmit = (e) => {
        e.preventDefault();

        setStudentName('');
        setSchool_Name('');
        setYear('');
        setLevel('');
        setScore('');
        setIa_Score('');
        setStatus('');

        axios.post(url, {
            "studentName": studentName,
            "school_Name": school_Name,
            "year": year,
            "level": level,
            "score": score,
            "ia_Score": ia_Score,
            "status": false
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    };

 
    const handleStudentName = (studentName) => {
        setStudentName(studentName);
    }
    const handleSelectLevel = (level) => {
        setLevel(level)
    }
    const handleSchoolName = (school_Name) => {
        setSchool_Name(school_Name);
    }
    const handleMathScore = (score) => {
        setScore(score)
    }
    const handleUniversityScore = (score) => {
        setScore(score);
    }
    const handleIAScore = (ia_Score) => {
        setIa_Score(ia_Score);
    }
    const handleCaption = (year) => {
        setYear(year)
    }


    return (
        <div className='main-container'>  
        <div className='left-containerIbdp'>         
             <div>
             <a className='backward_icon' href='./IBDPResultsPage'>
                <BiArrowBack/>
                </a>
            </div>
            <div className='heading'>
            <p>Add Success Stories</p>
            </div> 
            <div className='details-container'>
                <div className='student-name'>
                    <span>Student Name</span>
                    <div className='rectangular-button' contentEditable='true'
                    onInput={(e) => handleStudentName(e.target.textContent)}>
                    </div>

                </div>
                <div className='select-level'>
                <span>Select Level</span>
                <div className='rectangular-button' contentEditable='true'
                onInput={(e) => handleSelectLevel(e.target.textContent)}>

                </div>
                </div>
                <div className='schoolName' >
                <span>School Name/caption</span>
                <div className='rectangular-button' contentEditable='true'
                onInput={(e) => handleSchoolName(e.target.textContent)}>

                </div>
                </div>
                <div className='Math-Score' >
                <span>Math Score</span>
                <div className='rectangular-button-small' contentEditable='true'
                onInput={(e) => handleMathScore(e.target.textContent)}>
                  {score}
                </div>
                    <span className='divdeNumber'>/7</span>
                </div>
                
                <div className='University-name' >
                <span>university Name</span>
                <div className='rectangular-button' contentEditable='true'
                onInput={(e) => handleUniversityScore(e.target.textContent)}>
                </div>
                </div>
                
                <div className='IA-score' >
                <span>IA-Score</span>
                <div className='rectangular-button-small' contentEditable='true'
                onInput={(e) => handleIAScore(e.target.textContent)}>

                    {ia_Score}
                    
                       <span className='divdeNumber'>/20</span>
                   

                </div>
                </div>

                <div className='caption' >
                <span>Caption</span>
                <div className='rectangular-button' contentEditable='true'
                onInput={(e) => handleCaption(e.target.textContent)}>

                </div>
                </div>
                <div className='extra-info' >
                <span>Extra Info about Score (Eg. Perfect score)</span>
                <div className='rectangular-button' contentEditable='true'
                // onInput={(e) => handleextraInfo(e.target.textContent)}
                >

                </div>
                </div> 
                </div>
                </div>


            <div className='right-containerIbdp'>
          <button className='SaveTheChangesBtnIbdp'>Save The Changes</button>
       <button className='ResetAllBtnIbdp'>Reset All</button>
         <button className='PreviewPageBtnIbdp'>Preview Page</button>
        
       <button className='PublishUnpublishBtnIbdp'>
    <select className="dropbtnIbdp" id="publishUnpublishSelect">
        <option value="PublishIbdp">Publish</option>
        <option value="UnpublishIbdp">Unpublish</option>
    </select> 
       </button>
       <a href='./IBDPResultsPage'>
       <button className='goBackIbdp'>Go back</button>
       </a>
            </div>
        </div> 
        
    );
}

export default AddNewIbdpResult;
