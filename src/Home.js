import React from 'react';
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <Display4>React First App</Display4>
                    <Lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</Lead>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <Button primary lg>Learn more</Button>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;