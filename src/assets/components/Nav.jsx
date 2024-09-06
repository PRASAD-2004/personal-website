import { useState } from 'react';

export default function Nav() {
  return (
    <div className='nav'>
      <nav>
        <img src='./my-logo.png' alt="logo" className='my-logo'/>
        <ul className='elements'>
          <li onClick={() => window.scrollTo(0, 0)}>Home</li>
          <li onClick={() => window.scrollTo(0, 0)}>About</li>
          <li onClick={() => window.scrollTo(500, 700)}>Skills</li>
          <li onClick={() => window.scrollTo(900, 1500)}>Portfolio</li>
          <li onClick={() => window.scrollTo(1700, 2000)}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}