import React from 'react'
import './commonDiv.css'
function CommonPersonalizedDiv() {

  return (
    <div className='commonDiv'>
      <div className='button-container'>
      <a href='/Banner' className='bannerBtn'>
        Banner
      </a>
      <a href='/IBDPResultsPage' className='ibdpRbtn'>
      Categories
      </a>
      <a href='MypResults' className='mypRbtn'>
      Courses
      </a>
      <a href='IgcseResults' className='igcseRbtn'>
      Testimonial
      </a>
      <a href='CompetitionResult' className='competitionbtn'>
        Results
      </a>
      <a href='CompetitionResult' className='competitionbtn'>
        FAQ
      </a>
    </div>
    
    </div>
    
  )
}

export default CommonPersonalizedDiv;
