import React from 'react'
import './commonDiv.css'
function commonDiv() {

  return (
    <div className='commonDiv'>
      <div className='button-container'>
      <a href='/Banner' className='bannerBtn'>
        Banner
      </a>
      <a href='/IBDPResultsPage' className='ibdpRbtn'>
        IBDP Results
      </a>
      <a href='MypResults' className='mypRbtn'>
        MYP Results
      </a>
      <a href='IgcseResults' className='igcseRbtn'>
        IGCSE Results
      </a>
      <a href='CompetitionResult' className='competitionbtn'>
        Competition Results
      </a>
    </div>
    
    </div>
    
  )
}

export default commonDiv;
