import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserDashboard = () => {
    return (
        <Container fluid className='wrapper-body'>
        <Row>
            <Col>
                <p>Dashboard</p>
            </Col>
        </Row>
        </Container>
    );
};

export default UserDashboard;