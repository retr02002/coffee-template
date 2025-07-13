import logo from './logo.svg';
import { ReactFragment } from 'react';
import './Style.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Coffee() {
    return (
      <>
      <section className='sub-section section-padding background-properties'>
                <Container>
                    <Row>
                        <Col md={12} className='text-center'>
                            <h2 className='main-font-style fw-bold fs-1'>What kind of Coffee we serve for you</h2>
                            <p className='main-font-style fs-6'>Who are in extremely love with eco friendly system.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center py-5'>
                        <Col md={3} className='bg-white p-4 rounded-2 me-4 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Cappuccino</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                        <Col md={3} className='bg-white p-4 rounded-2 me-4 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Americano</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                        <Col md={3} className='bg-white p-4 rounded-2 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Espresso</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                        <Col md={3} className='bg-white p-4 rounded-2 me-4 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Macchiato</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                        <Col md={3} className='bg-white p-4 rounded-2 me-4 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Mocha</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                        <Col md={3} className='bg-white p-4 rounded-2 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Coffee Latte</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                        <Col md={3} className='bg-white p-4 rounded-2 me-4 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Piccolo Latte</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                        <Col md={3} className='bg-white p-4 rounded-2 me-4 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Ristretto</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                        <Col md={3} className='bg-white p-4 rounded-2 mb-4 shadow'>
                            <div className='d-flex w-100 justify-content-between'>
                                <p className='main-font-style fw-bold'>Affogato</p>
                                <p className='main-font-style sub-font fw-bold'>$49</p>
                            </div>
                            <p className='main-font-style theme-text-size'>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
      </>
    );
}

export default Coffee;