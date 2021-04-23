import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage'
// import axios from 'axios'
// import products from "../products";

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
const HomeScreen = ({ match }) => {
    // const [products, setProducts] = useState([]);
    const keyword = match.params.keyword
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList

    useEffect(() => {

        // const fetchProducts = async () => {
        //     const { data } = await axios.get('/api/products');

        //     setProducts(data);
        // }
        // fetchProducts()

        dispatch(listProducts(keyword));
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
            {loading ? <Loader /> : error ? <ErrorMessage variant='danger'>{error}</ErrorMessage> :
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
