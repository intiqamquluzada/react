import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sky from './Sky'
import Cloud from './Cloud'

function App() {


  return (
    <div>
      <Sky>
        <Cloud />
      </Sky>
    </div>

  )
}

export default App
