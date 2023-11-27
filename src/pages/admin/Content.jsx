import React from 'react'
import './content.css'

function Content({ children }) {
    return <div className="pagesContent">
      {children}
      
    </div>;
  }

export default Content