import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../User_auth/Login.scss';
//import Loginbg from '../../assets/img/login_bg.jpg';

const Login = () => {
    const [validated] = useState(false);
    return (
        <Container fluid className='p-0'>
            <Row className='m-0 login-page align-items-center'>
                <Col lg={6} className='p-0 banner-section'>
                    {/* <img src={Loginbg} alt="brand-logo" className="" /> */}
                    <div className='right-divtext'>
                        <h5><b>LOGO</b></h5>
                        <h6>Homeopathy</h6>
                        <p>Empowering Healthcare, One Click at a Time: <span>Your Health, Your Records, Your Control</span></p>
                    </div>
                </Col>
                <Col lg={6} className='formSection'>
                    <h6 className="mb-5"><b>LOGO</b></h6>
                    <h1>Login <span>Login in to your account</span></h1>
                    <Form noValidate validated={validated}>
                        <Form.Group>
                            <Form.Label>Mobile No. / Email ID</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Mobile No. / Email ID"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-between mt-3">
                            <Form.Group>
                                <Form.Check
                                    required
                                    label="Remember me for 30 days"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <a href=''>Forgot Password?</a>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Login with OTP instead of password"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <a href='/dashboard' className='btn btn-login' type="submit">Login</a>
                    </Form>
                    <Col lg={12} className='text-center mt-5'>
                        <p>
                            Don't have an account? <a href='/register'>Sign up</a>
                        </p>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;