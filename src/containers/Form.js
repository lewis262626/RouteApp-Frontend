import React, { useState } from 'react';
import { Col, Form, Button, Spinner } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import Slider, { Range} from 'rc-slider';
import Tooltip from 'rc-tooltip';

import './Form.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'rc-slider/assets/index.css';

import apiPost from '../net/Post';

import { countryList } from '../containers/resources/countries';

const PlaneForm = (props) => {

    const [country, setCountry] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sliderValue, setSliderValue] = useState(200);

    const onChange = (selected) => {
        setCountry(selected);
    }

    const onSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const result = await apiPost(country, sliderValue);

        if (result.status !== 200) {
            console.log("API error");
            setIsLoading(false);
            return;
        }
        props.setFormResult(result.data);
        setIsLoading(false);
    }

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const Handle = Slider.Handle;

    const handle = (props) => {
        const {value, dragging, index, ...restProps } = props;
        setSliderValue(value);
        return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value + " nm"}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={sliderValue} {...restProps} />
            </Tooltip>
        );
    };

    return (
        <Form onSubmit={(e) => onSubmit(e)} className="form-container">
            <Form.Row className="justify-content-md-center">
                <Col className="offset-md-1" md={3}>
                    <Typeahead id="country-form" onChange={(selected => onChange(selected))} options={countryList} placeholder="Country" />
                </Col>
                <Col md="auto">
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
                        {!isLoading ? 'Submit' : ''}
                    </Button>
                </Col>
            </Form.Row>
            <Form.Row className="justify-content-md-center mt-3">
                <Col xs={3}>
                    <Slider min={200} defaultValue={200} max={1000} handle={handle} />
                </Col>
            </Form.Row>
        </Form>
    )
}

export default PlaneForm;