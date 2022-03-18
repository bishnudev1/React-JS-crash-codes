import React, { PureComponent } from 'react'

class Pure_Component extends PureComponent {

    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    render(){
        console.log("Page rendered")
        return (
            <>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})} >Increase Data</button>
            </>
        )
    }
}

export default Pure_Component;