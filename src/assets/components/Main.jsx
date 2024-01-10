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
                    <p>I'm a professional web developer.Our main goal is to help and satisfy the local and global clients by web development solutions</p>

                    <div className='links'>
                        {cards}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}