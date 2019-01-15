import React, { Component } from 'react';
import Validation from './Validation';
import Input from './input';

class Testpage extends Component {
    constructor(props){
        super(props);
    }

    render(props) {
        return (
            <div>
                <Validation />
                <Input name="Umakant" value="Umakant"/>
            </div>
        );
    }
}

export default Testpage;