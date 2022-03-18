import React from 'react'

const ClickEvent = () => {
    const data = "Hello"
    const evenEmmit = () => {
        alert("Button Clicked")
        data = "Hii"
    }
  return (
    <>
    <h1 className>{data}</h1>
    <button onClick={evenEmmit}>Click Here</button>
    </>
  )
}

export default ClickEvent;