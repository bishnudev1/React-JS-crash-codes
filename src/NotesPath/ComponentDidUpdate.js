import React,{Component} from 'react'

class ComponentDidUpdate extends Component {

    constructor(){
        super();
        console.warn('Constructor Called !');
        this.state = {
            count:0
        }
    }

    componentDidUpdate(){
        console.warn('ComponentDidMount Called !')
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

export default ComponentDidUpdate;

// ComponentDidUpdate will only call if any state / variables are changing
