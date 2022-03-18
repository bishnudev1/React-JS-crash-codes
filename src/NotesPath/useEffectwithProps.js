import React, { useEffect } from 'react'

const UseEffectwithProps = (props) => {
    useEffect(()=>{
        console.warn('Props with useEffect is called')
    })
  return (
    <>
        <h1>Value : {props.count}</h1>
    </>
  )
}

export default UseEffectwithProps;