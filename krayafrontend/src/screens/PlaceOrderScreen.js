import React from 'react'
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from "../components/ErrorMessage"
import CheckoutStep from '../components/CheckoutStep'

const PlaceOrderScreen = () => {

    const cart = useSelector((state) => state.cart)
    return (
        <div>

        </div>
    )
}

export default PlaceOrderScreen
