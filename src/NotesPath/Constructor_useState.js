import React,{Component} from 'react';

class useStateClass extends Component {
    constructor(){
        super();
        this.state = {
            data:0
        }
    }

    increVal(){
        this.setState({data:this.state.data+1})
    }
    render(){

        return (<>
            <h1>Constructor and useState in Class Component</h1>
            <h3></h3>
            <button onClick={()=>this.increVal()} >Click Here</button>
            </>
        )
    }
}

export default useStateClass;