import React, { Component } from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        this.names = [
            {
                id: 1,
                client: "Ram"
            },
            {
                id: 2,
                client: "Jaya",
            },
            {
                id: 3,
                client: "Vinod",
            },
            {
                id: 4,
                client: "Vijay"
            },
        ];
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect= (e) => {
        // this.setState({value : this.refs.name});
        // console.log(this.state.value);
        console.log(this.refs.selectoption.value);
    }

    render() {
        return (
            <div>
                <select name="names" ref="selectoption" onChange={this.handleSelect}>
                    {this.names.map((e, key) => 
                    <option key={e.id} value={e.id}>{e.client}</option>)}
                </select>
            </div>
        );
    }
}

export default Select;