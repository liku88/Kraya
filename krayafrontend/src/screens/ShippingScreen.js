import e from 'express'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from '../components/FormComponent'

const ShippingScreen = ({ history }) => {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    return (
        <FormComponent>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='Address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} required></Form.Control>
                </Form.Group>
                <Form.Group controlId='City'>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' placeholder="Enter Your City" value={city} onChange={(e) => setCity(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='PostalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type='text' placeholder="Enter Your Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='Country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' placeholder="Enter Your Country" value={country} onChange={(e) => setCountry(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>Continue</Button>
            </Form>
        </FormComponent>
    )
}

export default ShippingScreen
