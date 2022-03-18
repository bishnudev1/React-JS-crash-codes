import React from 'react'
import { Table } from 'react-bootstrap';

const ListWIthBootstrap = () => {
    const studentData = [
        { name: 'Sam', age: 21, roll: 31, brunch: 'CSE' },
        { name: 'Ram', age: 20, roll: 12, brunch: 'IT' },
        { name: 'Rohan', age: 20, roll: 21, brunch: 'ECE' },
        { name: 'Bishnu', age: 19, roll: 68, brunch: 'EE' }
    ]
    return (
        <>
            <Table striped>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Roll</td>
                    <td>Brunch</td>
                </tr>

                {
                    studentData.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.roll}</td>
                            <td>{item.brunch}</td>
                        </tr>
                    )
                }
            </Table>
        </>
    )
}

export default ListWIthBootstrap;