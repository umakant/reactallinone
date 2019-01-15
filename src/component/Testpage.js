import React, { Component } from 'react';
import Validation from './Validation';
import Input from './input';

class Testpage extends Component {
    render() {
        return (
            <div>
                <Validation />
                <Input />
            </div>
        );
    }
}

export default Testpage;