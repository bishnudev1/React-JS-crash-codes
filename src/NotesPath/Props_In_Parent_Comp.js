import React from 'react'

const Props_In_Parent_Comp = () => {
    const data = 'Welcome User';
  return (
    <>
        <h1>Sending Data From Child to Parent Component</h1>
        <button onClick={()=>alert(data)} >Get Data</button>
    </>
  )
}

export default Props_In_Parent_Comp;