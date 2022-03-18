import React, { useState } from 'react'

const PostReq = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const getData = () => {
        console.log(name,email,password);
        let data = {name,email,password};
        fetch("http://localhost:4000/todo", {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
            console.warn("resp",resp)
        })
    })
    }

  return (
    <>
        <h3>Name</h3>
        <input type='text' onChange={(e)=>{setName(e.target.value)}} value={name} name='name' />
        <h3>Email</h3>
        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} value={email} name='email' />
        <h3>Password</h3>
        <input type='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} name='password' />
        <br></br>
        <br></br>
        <button onClick={getData} >Submit</button>
    </>
  )
}

export default PostReq;