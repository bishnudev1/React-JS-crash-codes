import React from 'react'

const Render_Life_Cycle = (props) => {
    console.warn("Render Method");
  return (
    <>
    <h3>Hello {props.name}</h3>
    </>
  )
}

export default Render_Life_Cycle;