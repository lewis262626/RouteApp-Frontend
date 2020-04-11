import React, { useState } from 'react';
import { Col, Form, Button, Spinner } from 'react-bootstrap';
import './Form.css';
import apiPost from '../net/Post';

const PlaneForm = (props) => {
    const [country, setCountry] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (e) => {
        setCountry(e.target.value);
    }

    const onSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const result = await apiPost(country);

        if (result.status !== 200) {
            console.log("API error");
            return ;
        }
        props.setFormResult(result.data);
        setIsLoading(false);
    }

    return (
        <Form onSubmit={(e) => onSubmit(e)} className="form-container">
            <Form.Row className="justify-content-md-center">
                <Col xs={3}>
                    <Form.Control value={country} onChange={onChange} placeholder="Country" />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" type="submit">
                        <Spinner
                            className="mr-1"
                            hidden={!isLoading}
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    {!isLoading ? 'Submit': '' }
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