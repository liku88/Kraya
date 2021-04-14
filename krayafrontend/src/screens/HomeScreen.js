import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product'
// import axios from 'axios'
// import products from "../products";

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
const HomeScreen = () => {
    // const [products, setProducts] = useState([]);

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList

    useEffect(() => {

        // const fetchProducts = async () => {
        //     const { data } = await axios.get('/api/products');

        //     setProducts(data);
        // }
        // fetchProducts()

        dispatch(listProducts());
    }, [dispatch]);
    return (
        <>
            {/* <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row> */}
            <h1>Latest Products</h1>
            {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> :
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>}

        </>
    )
}

export default HomeScreen
