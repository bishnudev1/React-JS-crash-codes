import React, { Component } from 'react'

class Props_Class_Comp extends Component{
    render(){
        return (
            <>
            <h1>Props in Class Component</h1>
            <h3>Name : {this.props.name}</h3>
            <h3>Email : {this.props.email}</h3>
            </>
        )
    }
}
export default Props_Class_Comp