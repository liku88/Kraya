import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
const FormComponent = ({ children }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={16}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormComponent
