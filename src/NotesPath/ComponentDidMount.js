import React,{Component} from 'react'

class ComponentDidMount extends Component {

    constructor(){
        super();
        console.warn('Constructor Called !');
    }

    componentDidMount(){
        console.warn('ComponentDidMount Called !')
    }

    render(){
        console.warn('Render Called !');
        return (
            <h1>Component Did Mount in React</h1>
        )
    }
}

export default ComponentDidMount;

/*First Constructor will call , then it will stop ComponentDidMount
 until Render (All HTML DOM will Render) is called.
 Then at the end ComponentDidMount will call itself.*/