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
        this.handleOption = this.handleOption.bind(this);
    }

    handleSelect= (e) => {
        // this.setState({value : this.refs.name});
        // console.log(this.state.value);
        console.log('Select');
    }

    handleOption= (e) => {
        // this.setState({value : this.refs.name});
        // console.log(this.state.value);
        console.log('Option');
    }

    render() {
        return (
            <div>
                <select name="names" onChange={this.handleSelect}>
                    {this.names.map((e, key) => 
                    <option key={e.id} ref="name" value={e.id} onSelect={this.handleOption}>{e.client}</option>)}
                </select>
            </div>
        );
    }
}

export default Select;