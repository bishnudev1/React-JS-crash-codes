import React, { useState } from 'react'

const PrevStateVal = () => {

    const [count,setCount] = useState(1);
    function updateCounter() {
        let rand = Math.floor(Math.random()*10)
        setCount((pre)=>{
            if(pre - rand < 3){
                alert("Alert has been called")
            }
            return rand;
        })
    }
  return (
    <>
        <h1>Count : {count}</h1>
        <button onClick={updateCounter} >Click to Update</button>
    </>
  )
}

export default PrevStateVal;