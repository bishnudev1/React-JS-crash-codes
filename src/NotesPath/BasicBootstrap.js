import React from 'react'
import { Button } from 'react-bootstrap';

const BasicBootstrap = () => {
  return (
    <>
        <h1>Getting started with Bootstrap in React</h1>
        <Button onClick={()=>{alert("Hello Sir")}} variant="primary">Primary</Button>
    </>
  )
}

export default BasicBootstrap;