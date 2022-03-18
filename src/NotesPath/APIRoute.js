import React, { useEffect, useState } from 'react'

const APIRoute = () => {
    const [ data, setData ] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/todo").then((result)=>{
            result.json().then((resp)=>{
                setData(resp);
            })
        })
    },[])
    console.warn(data)
  return (
    <>
        <h1>Get API Call in React</h1>
        <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                </tr>
                {
                    data.map((item)=>{
                        <tr>
                            <td>{item.userID}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                    })
                }
        </table>
    </>
  )
}

export default APIRoute;