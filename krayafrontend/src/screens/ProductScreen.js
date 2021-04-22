import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

const ProductScreen = ({ history, match }) => {
    // const product = products.find(p => p._id === match.params.id)
    // const [product, setProduct] = useState([]);


    //For Quantity
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);

    const { loading, productDetail, error } = productDetails;

    useEffect(() => {
        // const fetchProduct = async () => {
        //     const { data } = await axios.get(`/api/products/${match.params.id}`);

        //     setProduct(data);
        // }

        // fetchProduct()
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    }

    return (
        <>
            <Link className='btn btn-light my-3' to="/">
                Go Back
           </Link>
            {loading ? <Loader /> : error ? <ErrorMessage variant='danger'>{error}</ErrorMessage> : (
                <Row>
                    <Col md={6}>
                        <Image src={productDetail.image} alt={productDetail.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush' >
                            <ListGroup.Item>
                                <h3>{productDetail.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={productDetail.rating} text={`${productDetail.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price : ${productDetail.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description : ${productDetail.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                         </Col>
                                        <Col>
                                            <strong>${productDetail.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status:
                                         </Col>
                                        <Col>
                                            {productDetail.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {productDetail.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(productDetail.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={productDetail.countInStock === 0}>
                                        Add To Cart
                                     </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductScreen
