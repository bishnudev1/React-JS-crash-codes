import React from 'react'

const MapMethod = () => {
    const students = [
        {name:"Bishnudev",age:20,hobby:'Gaming'},
        {name:"Arnab",age:21,hobby:'Writing'},
        {name:"Sudip",age:19,hobby:'Travel'}
    ]
  return (
    <>
        <table border="1">
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Hobby</td>
            </tr>
            {
                students.map((data)=>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.hobby}</td>
                    </tr>
                )
            }
        </table>
    </>
  )
}

export default MapMethod;