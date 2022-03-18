import React, { useState,useMemo } from 'react'

const UseMemo = () => {
    const [ count, setCount ] = useState(0);
    const [ item, setItem ] = useState(1);

    // function multiply() {
    //     console.log("Multiply is called successfully")
    //     return count*10;
    // }

    const multiply = useMemo(function multiplyMemo(){
        console.log("MultiplyMemo is called");
        return count*10;
    },[count])

  return (
    <>
        <h1>Count : {count}</h1>
        <h1>Item : {item}</h1>
        <h3>{multiply}</h3>
        <button onClick={()=>setCount(count+1)} >Update Count</button>
        <button onClick={()=>setItem(item*5)} >Update Item</button>
    </>
  )
}

export default UseMemo;

// In normal function it will emmit for both button event
// but in useMemo you can set specific events