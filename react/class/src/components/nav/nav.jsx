import React from 'react'
import { ImImage } from 'react-icons/im'
import './nav.css'

function nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="/image.png" alt="logo" />
      </div>
      <div className="list">
        <ul className=''>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default nav
