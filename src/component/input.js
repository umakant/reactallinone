import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);


        this.state = { 
            value1: '',
            value2: '',
            result: '' 
        };

        const valuesall = {
            dates: 'vca',
            name: 'Umakant',
            email: 'umakantsonwani@gmail.com'
        }

        //this.state = { value2: '' };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }



    handleChange1=(e)=>{
        this.setState({ value1 : e.target.value });
    }

    handleChange2=(e)=>{
        this.setState({ value2 : e.target.value });
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
                    <input type="text" value={this.state.value1} onChange={this.handleChange1} />
                </label>
                <label>
                    Value 2:
                    <input type="text" value={this.state.value2} onChange={this.handleChange2} />
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