import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from '../components/FormComponent'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutStep from '../components/CheckoutStep'
const ShippingScreen = ({ history }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        history.push('/payment')
        console.log('submit')
    }

    return (
        <FormComponent>
            <CheckoutStep step1 step2 />
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
