import { useState } from 'react'
import Scoial from './Socialmedia'
import Render from './Render'
import { render } from 'react-dom'

export default function Main(){

    const cards = Render.map(item => {
        return (
            <Scoial
                href={item.href}
                src={item.src}
            />
        )
    }) 

    console.log(cards)
    
    return(

 

        <div className='main'>
            <div className='my-photo'>
                <img src='./prasad_photo.jpeg' alt='prasad'/>
            </div>

            <div className='main'>
                <div className='describe'>
                    <p className='name-firstline'>Hi,I'm</p>
                    <p  className='name'>Murakundla prasad</p>
                    <p>Motivated computer science student skilled in problem-solving, web development, and data structures. Proficient in Python, Java, C, with experience in Tableau dashboard building. Eager to apply technical skills and learn in a dynamic role</p>

                    <div className='links'>
                        {cards}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}