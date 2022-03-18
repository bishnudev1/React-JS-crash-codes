import React from 'react'

const ReuseComp = (props) => {
  return (
    <>
        <h3>{props.data.name}</h3>
        <h3>{props.data.dept}</h3>
        <h3>{props.data.roll}</h3>
    </>
  )
}

export default ReuseComp;