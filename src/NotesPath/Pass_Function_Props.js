import React from 'react'

const Pass_Function_Props = (props) => {
  return (
    <>
      <button onClick={props.data}>Get Func From Parent Component</button>
    </>
  )
}

export default Pass_Function_Props;