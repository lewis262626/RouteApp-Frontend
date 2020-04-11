import React from 'react';
import { Container } from 'react-bootstrap';

const About = (props) => {
    return (
        <Container>
            <h1 className="mt-2">About me..</h1>
            <p>The code for this website is at: <a href="https://github.com/lewisrobbins/RouteApp-Frontend">code</a></p>
        </Container>
    )
}

export default About;