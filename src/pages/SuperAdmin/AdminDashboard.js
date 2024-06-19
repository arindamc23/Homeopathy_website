import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const AdminDashboard = () => {
    return (
        <Container fluid className='wrapper-body'>
        <Row className='mb-4 m-0'>
            <Col className='p-0'>
                <h6><b>Dashboard</b></h6>
            </Col>
        </Row>
        <Row>
            <Col lg={9} md={9}>
                <Card className='cardbanner mb-0'>
                    <div className='mb-4 d-flex gap-3'>
                        <div className='d-flex align-items-center dash_wh'>
                            <i className="ri-empathize-line"></i>
                            <h5>9 <small className='d-blocl mt-2'>New Patients</small> </h5>
                        </div>
                        <div className='d-flex align-items-center dash_wh'>
                            <i className="ri-customer-service-2-line"></i>
                            <h5>15 <small className='d-blocl mt-2'>Book Appointments</small> </h5>
                        </div>
                        <div className='d-flex align-items-center dash_wh'>
                            <i className="ri-hand-coin-line"></i>
                            <h5>$8000<small className='d-blocl mt-2'>Total Earnings</small> </h5>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <span>Wellcome</span>
                        <h1>Jon Doe</h1>
                        <span>Your schedule today.</span>
                    </div>
                    
                </Card>
            </Col>
            <Col lg={3} md={3}>
                <Card className='card'>
                    <Card.Header>
                        Active Doctors
                        <a href='#'>View More</a>
                    </Card.Header>
                </Card>
            </Col>
         </Row> {/*-- End Dashboard Banner --*/}

         <Row className='mt-4'>
            <Col lg={2} md={4} className='mb-2 disease-card'>
                <Card className='card'>
                    <i className="ri-lungs-line"></i>
                    <h4>
                        <small>Disease 1</small>
                        5
                    </h4>
                </Card> 
            </Col>
            <Col lg={2} md={4} className='mb-2 disease-card'>
                <Card className='card'>
                    <i className="ri-lungs-line"></i>
                    <h4>
                        <small>Disease 2</small>
                        0
                    </h4>
                </Card> 
            </Col>
            <Col lg={2} md={4} className='mb-2 disease-card'>
                <Card className='card'>
                    <i className="ri-lungs-line"></i>
                    <h4>
                        <small>Disease 3</small>
                        6
                    </h4>
                </Card> 
            </Col>
            <Col lg={2} md={4} className='mb-2 disease-card'>
                <Card className='card'>
                    <i className="ri-lungs-line"></i>
                    <h4>
                        <small>Disease 4</small>
                        3
                    </h4>
                </Card> 
            </Col>
            <Col lg={2} md={4} className='mb-2 disease-card'>
                <Card className='card'>
                    <i className="ri-lungs-line"></i>
                    <h4>
                        <small>Disease 5</small>
                        0
                    </h4>
                </Card> 
            </Col>
            <Col lg={2} md={4} className='mb-2 disease-card'>
                <Card className='card'>
                    <i className="ri-lungs-line"></i>
                    <h4>
                        <small>Disease 6</small>
                        2
                    </h4>
                </Card> 
            </Col>
         </Row> {/*-- End Disease small cards --*/}

         <Row className='mb-3'>
            <Col lg={12} md={12} className='mb-2'>
                <Card className='card'>
                    <Card.Header>
                        Appointments
                        <a href='#'>View More</a>
                    </Card.Header>
                </Card>
            </Col>
         </Row>

         <Row>
            <Col lg={6} md={6} className='mb-2'>
                <Card className='card'>
                    <Card.Header>
                        Online Consultation
                    </Card.Header>
                </Card>
            </Col>
            <Col lg={6} md={6} className='mb-2'>
                <Card className='card'>
                    <Card.Header>
                        Overall Purchases
                    </Card.Header>
                </Card>
            </Col>
         </Row> {/*-- End Charts cards --*/}

         

        </Container>
    );
};

export default AdminDashboard;