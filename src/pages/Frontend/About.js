import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/scss/MainStyle.scss';

//Icon//
import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded';

const About = () => {
    return (
        <Container>
        <Row>
            <Col>
                <p className='d-flex align-items-center'><MaterialSymbol icon="edit_note" size={30}  color='red' className='me-2' /> About</p>
            </Col>
        </Row>
        </Container>
    );
};

export default About;