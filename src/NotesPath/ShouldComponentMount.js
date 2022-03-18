import React,{Component} from 'react'

class ShouldComponentMount extends Component {

    constructor(){
        super();
        console.warn('Constructor Called !');
        this.state = {
            count:0
        }
    }

    shouldComponentUpdate(){
        console.warn('ComponentDidMount Called !')
        return true;
    }

    render(){
        console.warn('Render Called !');
        return (<>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}} >Change State</button>
            </>
        )
    }
}

export default ShouldComponentMount;

/* It will update the state values
if only shouldComponentUpdate returns
true otherwise it will render as false*/
