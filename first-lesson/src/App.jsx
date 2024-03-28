import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const myArray = [
    'Intigam',
    'Iltifat',
    'Fateh',
    'Judo'
  ];

  return (
    <div>
      {myArray.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>


  );

}

export default App;
