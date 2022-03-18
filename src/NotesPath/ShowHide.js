import React, { useState } from 'react'

const ShowHide = () => {

    const [ status, setStatus ] = useState(true);
  return (
    <>
    {
        status ? <h1>Hello World</h1> : null
    }
    <button onClick={()=>{setStatus(true)}} >Show Component</button>
    <button onClick={()=>{setStatus(false)}} >Hide Component</button>
    {/* Toggle the component, means no need to make two buttons */}
    <button onClick={()=>{setStatus(!status)}} >Toggle Component</button>
    </>
  )
}

export default ShowHide;