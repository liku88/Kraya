import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../index.css";

const Footer = () => {
    return (
        <footer >
            <Container >
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; KRAYA
                   </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
