import React from 'react';
import Top from './top';
import Footer from './footer';
import Calculator from '../apps/calculator';
import EmployeeData from '../apps/employees';

import './App.css'

function App() {

  return (
    <div className = "container">
      <Top />
      <h1>Empleados</h1>
      <EmployeeData/>
      <h1>Calculadora</h1>
      <Calculator/>
      <hr className='break'></hr>
      <Footer/>
    </div>
  )
}

export default App
