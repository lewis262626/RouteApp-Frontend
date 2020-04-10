import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Form.css';

const PlaneForm = () => {
    const [country, setCountry] = useState("");
    return (
        <Form className="form-container">
            <Form.Row className="justify-content-md-center">
                <Col xs={3}>
                    <Form.Control placeholder="Country" />
                </Col>
                <Col xs="auto">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Col>
            </Form.Row>
            <Form.Row className="range-sel">
                <Col xs={4}>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default PlaneForm;