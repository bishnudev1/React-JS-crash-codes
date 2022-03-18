import React,{forwardRef} from 'react'

const ForwardRef = (props,ref) => {
  return (
    <>
    <h1>Using Forward Ref in React</h1>
    <input type='text' ref={ref}/>
    </>
  )
}

export default forwardRef(ForwardRef);