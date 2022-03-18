import React from 'react'

const UncontrolledComp = () => {

    const getData = (e) => {
        e.preventDefault();
        let formData = document.getElementById('formData').value;
        console.warn(formData);
    }

  return (
    <>
        <form onSubmit={getData} >
        <input id='formData' type="text" placeholder="Enter your name....." />
        <button>Submit</button>
        </form>
    </>
  )
}

export default UncontrolledComp;