import React, { Component } from 'react';

class lifecycle extends Component {

    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return (
            <div>
                
            </div>
        );
    }
    
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }

    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
    // componentDidUpdate(){
    //     console.log('componentDidMount');
    // }
}

export default lifecycle;