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
    }

    render() {
        return (
            <div>
                <select name="names">
                    {this.names.map((e, key) => <option key={e.id} value={e.id}>{e.client}</option>)}
                </select>
            </div>
        );
    }
}

export default Select;