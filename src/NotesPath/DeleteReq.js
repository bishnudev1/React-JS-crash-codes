import React, { useEffect, useState } from 'react'

const DeleteReq = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getList();
    }, [])
    console.warn(users);

    const getList = () =>{
        fetch("http://localhost:4000/todo").then((result) => {
            result.json().then((resp) => {
                setUsers(resp);
            })
        })
    }

    const deleteUser = () => {
        fetch(`http://localhost:4000/todo/${id}`, {
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp);
                getList();
            })
        })
    }
    return (
        <>
            <h1>Delete Data with API Call in React</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{item.usersID}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td><button onClick={()=>deleteUser(item.id)} >Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default DeleteReq;