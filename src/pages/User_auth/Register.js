import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../User_auth/Login.scss';
import Modal from 'react-bootstrap/Modal';
import OtpModal from '../../modalPopup/OtpModal';

const Login = () => {
    const [validated] = useState(false);
    const [value, setValue] = useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        
        <Container fluid className='p-0'>
            <Row className='m-0 login-page align-items-center'>
                <Col lg={6} className='p-0 banner-section'>
                    <div className='right-divtext'>
                        <h5><b>LOGO</b></h5>
                        <h6>Homeopathy</h6>
                        <p>Empowering Healthcare, One Click at a Time: <span>Your Health, Your Records, Your Control</span></p>
                    </div>
                </Col>
                <Col lg={6} className='formSection'>
                    <h6 className="mb-5"><b>LOGO</b></h6>
                    <h1>Register <span>Register in to your new account</span></h1>
                    <Form noValidate validated={validated}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mobile No.</Form.Label>
                            <PhoneInput
                                international
                                defaultCountry="IN"
                                value={value}
                                onChange={setValue}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Creat Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="password"
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleShow}>Send OTP</Button>
                    </Form>
                    <Col lg={12} className='text-center mt-5'>
                        <p>
                            Already have an account?  <a href='/login'>Login</a>
                        </p>
                    </Col>
                </Col>
            </Row>
           
        </Container>
        <Modal show={show} onHide={handleClose} centered>
            <OtpModal />
        </Modal>
        </>
    );
};

export default Login;