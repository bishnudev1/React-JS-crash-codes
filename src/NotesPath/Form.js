import React, { useState } from 'react'

const Form = () => {

  const [ name, setName ] = useState('');
  const [ tnc, setTnc ] = useState('false');
  const [ interest, setInterest ] = useState('');

  const getFormData = (e) => {
    console.log(name,tnc,interest);
    e.preventDefault();
  }
  return (
    <>
    <h1>Simple Form Using React JS</h1>
    <form onSubmit={getFormData}>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name...'/>
        <br></br>
        <br></br>
        <select value={interest} onChange={(e)=>{setInterest(e.target.value)}} >
          <option>Select Your Meal</option>
          <option>Chicken Biriyani</option>
          <option>Steam Momo</option>
          <option>White Rice with Chicken Curry</option>
        </select>
        <br></br>
        <br></br>
        <input type='checkbox' value={tnc} onChange={(e)=>{setTnc(e.target.checked)}} /><span>Accept Termns and Conditions</span>
        <br></br>
        <br></br>
        <button type='submit'>Submit Request</button>
    </form>
    </>
  )
}

export default Form;