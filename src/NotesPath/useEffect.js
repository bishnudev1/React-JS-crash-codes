import React,{useEffect, useState} from 'react'

const UseEffect = () => {

  const [ count, setCount ] = useState(0);

  useEffect(()=>{
    console.log("useEffect is called");
  }
  );

  useEffect(()=>{
    console.log("useEffect in Count is called");
  },[count]);

  return (
    <>
        <h1>useEffect {count}</h1>
        <button onClick={()=>{setCount(count+1)}} >Increment</button>
    </>
  )
}

export default UseEffect;

// useEffect will only called once if no states or values are updating
// We can use multiple useEffect in a same component