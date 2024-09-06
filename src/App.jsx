import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './assets/components/Nav'
import Main from './assets/components/Main'
import './App.css'
import Skills from './assets/components/Skills'
import Portfolio from './assets/components/Protfolio'
import Contact from './assets/components/Contact'

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
