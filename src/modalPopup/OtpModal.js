import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const OtpModal = () => {
    const [otp, setOtp] = useState('');
    return (
        <>
        <Container>
            <Row>
                <Col lg={12} md={12} className='otpSection'>
                    <h5 className='d-block'>Enter verification code</h5>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        //renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                    <div className='d-flex justify-content-center mt-5'>
                        <Button className='btn btn-secondary me-1'>Resend</Button>
                        <Button className='btn btn-info  ms-1'>Submit</Button>
                    </div>
                </Col>
            </Row>
        </Container>
            
        </>
    );
};

export default OtpModal;