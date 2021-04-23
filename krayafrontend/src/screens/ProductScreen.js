import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails, createProductReview } from '../actions/productActions'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants"

const ProductScreen = ({ history, match }) => {
    // const product = products.find(p => p._id === match.params.id)
    // const [product, setProduct] = useState([]);


    //For Quantity
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, productDetail, error } = productDetails;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const productReviewCreate = useSelector(state => state.productReviewCreate);
    const { success: successProductReview, error: errorProductReview } = productReviewCreate;

    useEffect(() => {
        // const fetchProduct = async () => {
        //     const { data } = await axios.get(`/api/products/${match.params.id}`);

        //     setProduct(data);
        // }

        // fetchProduct()


        if (successProductReview) {
            alert('Review Submitted!')
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match, successProductReview]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(match.params.id, {
            rating,
            comment
        }))
    }

    return (
        <>
            <Link className='btn btn-light my-3' to="/">
                Go Back
           </Link>
            {loading ? <Loader /> : error ? <ErrorMessage variant='danger'>{error}</ErrorMessage> : (
                <>
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
                    <Row>
                        <Col md={6}>
                            <h2>Reviews</h2>
                            {productDetail.reviews.length === 0 && <ErrorMessage>No Reviews</ErrorMessage>}
                            {<ListGroup variant='flush'>
                                {productDetail.reviews.map(review => (
                                    <ListGroup.Item key={review._id}>
                                        <strong>
                                            {review.name}
                                        </strong>
                                        <Rating value={review.rating} />
                                        <p>{review.createdAt.substring(0, 10)}</p>
                                        <p>{review.comment}</p>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item>
                                    <h2>
                                        Write a customer Review
                                    </h2>
                                    {errorProductReview && <ErrorMessage variant='danger'>{errorProductReview}</ErrorMessage>}
                                    {userInfo ? (<Form onSubmit={submitHandler}>
                                        <Form.Group controlId='rating'>
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
                                                <option value="">Select...</option>
                                                <option value="1">1 - Poor</option>
                                                <option value="2">2 - Fair</option>
                                                <option value="3">3 - Good</option>
                                                <option value="4">4 - Very Good</option>
                                                <option value="5">5 - Excellent</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId='comment'>
                                            <Form.Label>Comment</Form.Label>
                                            <Form.Control as='textarea' row='3' value={comment} onChange={(e) => setComment(e.target.value)}></Form.Control>
                                        </Form.Group>
                                        <Button type='submit' variant='success'>Submit</Button>
                                    </Form>) : <ErrorMessage>Please <Link to='/login'>Sign In</Link></ErrorMessage>}
                                </ListGroup.Item>
                            </ListGroup>}
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
}

export default ProductScreen
