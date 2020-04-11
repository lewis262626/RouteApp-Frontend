import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Results = (props) => {

    let data = props.formResult;

    return (
        <Container className="mt-4">
            <Row className="justify-content-md-center">
                <Col lg={4}>
                    <Card>
                        <Card.Header>Deperature Airport</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>
                                    Name: {data.airport1.name}, {data.airport1.state}
                                </li>
                                <li>
                                    ICAO: {data.airport1.icao}
                                </li>
                                <li>
                                    Runway Length: {data.airport1.runway_length} m
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Header>Arrival Airport, distance <b>{Math.ceil(data.distance / 1.852)}</b> NM</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>
                                    Name: {data.airport2.name}, {data.airport2.state}
                                </li>
                                <li>
                                    ICAO: {data.airport2.icao}
                                </li>
                                <li>
                                    Runway Length: {data.airport2.runway_length} m
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Results;