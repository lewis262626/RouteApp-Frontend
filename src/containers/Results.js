import React from 'react';
import { Container } from 'react-bootstrap';

const Results = (props) => {
    return (
        <Container>
            <ul>
                <li>{props.results}</li>
            </ul>
        </Container>
    )
}

export default Results;