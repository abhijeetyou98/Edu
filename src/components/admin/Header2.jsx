import React from 'react'
import './navbar.css'
import {FaSearch} from "react-icons/fa"

function Header2() {
  return (
    <div className="header">
    <svg className="White_strip_header">
      <rect
        id="White_strip_header" rx="0" ry="0" x="300" y="0" width="100%" height="85"
      ></rect>
    </svg>

    <div id="search_rect">
    <input placeholder='search'></input>
      <svg className="Rectangle_for_search_icon">
      
        <rect id="Rectangle_for_search_icon" rx="10" ry="10" x="0" y="0" width="346" height="40"
        ></rect>
      </svg>
      <div id="search_icon_rect">
        <svg className="Boundary_jo">
          <rect id="Boundary_jo"  rx="0"  ry="0"  x="0"  y="0"  width="26"  height="26"
          ></rect>
        </svg>
        <FaSearch className="fa fa-search" aria-hidden="true"/>
       
        <svg className="Path__magnify_jp" viewBox="3 3 19.5 19.5">
          <path id="Path__magnify_jp"></path>
        </svg>
      </div>
    </div>

    <div id="Registration_jq">
      <span>Home Page</span>
    </div>
 
    

    </div>
  )
}

export default Header2