import React,{useRef} from 'react'

const Ref = () => {

    let inputRef = useRef(null);
    const storeVal = () => {
        console.log('useRef state triggered');
        inputRef.current.value = '1000';
    }

  return (
    <>
    <h1>Use of Ref in React Functional Component</h1>
    <input type='text' ref={inputRef}/>
    <button onClick={storeVal}>Get Data</button>
    </>
  )
}

export default Ref;