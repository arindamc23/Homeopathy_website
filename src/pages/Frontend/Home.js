import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Icon//
import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded';

const Home = () => {
    return (
        <Container>
        <Row>
            <Col lg={12} md={12}>
                <p className='d-flex align-items-center'> <MaterialSymbol icon="home" size={24} grade={25} color='red' className='me-2' /> Home</p>
            </Col>
        </Row>
        </Container>
    );
};

export default Home;