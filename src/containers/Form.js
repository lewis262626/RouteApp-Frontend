import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import './Form.css';

const PlaneForm = () => {
    const [country, setCountry] = useState("");

    const onChange = (e) => {
        setCountry(e.target.value);
    }

    const onSubmit = (e) => {
        alert(country);
        e.preventDefault();
    }

    return (
        <Form  onSubmit={onSubmit} className="form-container">
            <Form.Row className="justify-content-md-center">
                <Col xs={3}>
                    <Form.Control value={country} onChange={onChange} placeholder="Country" />
                </Col>
                <Col xs="auto">
                <Button variant="primary" type="submits">
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