import React from 'react'
import './stylesReact.css';
import './custom.module.css';

const StylesReact = () => {
  return (
    <>
        <div className='method1' >React Style Method 1 : Creating a Stylesheet</div>
        <div style={{color:'pink',backgroundColor:'lightpink'}} >React Style Method 2 : Inline Style Method</div>
    </>
  )
}

export default StylesReact;