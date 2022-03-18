import React, { useState } from 'react'

const Input_Val = () => {

    const [ name, setName ] = useState(null);
    const [ print, setPrint ] = useState(false);

    const saveData = (val) => {
        setName(val.target.value);
        setPrint(false)
    }
  return (
    <>
    <h1>Get input value in React JS</h1>
    {
            print ?
            <h3>Your name is : {name}</h3>
            : null
    }
    <input type="text" onChange={saveData} placeholder='Enter your name...'/>
    <button onClick={()=>{setPrint(true)}} >Submit</button>
    </>
  )
}

export default Input_Val