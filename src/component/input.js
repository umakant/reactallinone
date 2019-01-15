import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
            value1: '',
            value2: '',
            result: '' 
        };

        //this.state = { value2: '' };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }



    handleChange1=(e)=>{
        console.log(this.refs.value1.value);
        this.setState({ value1 : this.refs.value1.value });
    }

    handleChange2=(e)=>{
        console.log(typeof(this.refs.value2.value));
        this.setState({ value2 : this.refs.value1.value });
    }

    addvalues=(e)=> {
        let res = parseInt(this.state.value1)+parseInt(this.state.value2);
        //let res = this.state.value1+this.state.value2;
        this.setState({ result: res });
    }

    render() {
        return (
            <div className="test">
                <label>
                    Value 1:
                    <input type="text" ref="value1" onChange={this.handleChange1} />
                </label>
                <label>
                    Value 2:
                    <input type="text" ref="value2" onChange={this.handleChange2} />
                </label>
                <label>
                    <input type="button" value="Submit" onClick={this.addvalues} />
                    Sum: {this.state.result}
                </label>
            </div>
        );
    }
}

export default Input;