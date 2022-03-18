import React,{Component} from 'react'

class ComponentWillUnMount extends Component {

    constructor(){
        super();
        console.warn('Constructor Called !');
        this.state = {
            show:true
        }
    }

    componentWillUnmount(){
        console.warn('componentWillUnmount Called !')
        alert('componentWillUnmount Called !')
    }

    render(){
        console.warn('Render Called !');
        return (<>
            {
                this.state.show ? <h1>ComponentWillUnMount in React JS</h1> : null
            }
            <button onClick={()=>{this.setState({show:!this.state.show})}} >Toggle</button>
            </>
        )
    }
}

export default ComponentWillUnMount;

// ComponentWillUnMount will only call if any state / variables are changing
