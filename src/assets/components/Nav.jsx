import { useState } from 'react'

export default function Nav(){
    return(
        <div className='nav'> 
            <nav>
                <img src='./my-logo.png' className='my-logo'/>
                <ul className='elements'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}