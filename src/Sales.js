import logo from './logo.svg';
import { ReactFragment, useState } from 'react';
import './Style.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Sales() {
    const [counterOn, setCounterOn] = useState(false);
    return (
      <>
      <section className='sub-section-2 section-padding text-white'>
                <Container>
                    <Row>
                        <Col md={12} className='text-center'>
                            <h2 className='main-font-style fw-bold fs-1'>What kind of Coffee we serve for you</h2>
                            <p className='main-font-style fs-6'>Who are in extremely love with eco friendly system.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center pt-5'>
                        <Col md={5}>
                            <img src='https://preview.colorlib.com/theme/coffee/img/r1.png.webp' className='img-fluid' alt='' />
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='main-font-style fw-bold m-0'>lorem ipsum</h5>
                                <div className='d-flex ps-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                            </div>
                            <p className='main-font-style theme-text-size pt-4'>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
                        </Col>
                        <Col md={5}>
                            <img src='https://preview.colorlib.com/theme/coffee/img/r2.png.webp' className='img-fluid' alt='' />
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='main-font-style fw-bold m-0'>lorem ipsum</h5>
                                <div className='d-flex ps-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                            </div>
                            <p className='main-font-style theme-text-size pt-4'>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
                        </Col>
                    </Row>
                    <ScrollTrigger onEnter={()=>setCounterOn(true)}>
                    <Row className='justify-content-center align-items-center pt-5'>
                        <Col md={5} className='pt-5'>
                            <Row>
                                <Col md={6}>
                                    <h2 className='main-font-style main-heading fw-light m-0'>{counterOn && <CountUp start={0} end={2536} duration={2} delay={0}/>}</h2>
                                    <p className='main-font-style theme-text-size'>Happy Clients</p>
                                </Col>
                                <Col md={6}>
                                    <h2 className='main-font-style main-heading fw-light m-0'>{counterOn && <CountUp start={0} end={7562} duration={2} delay={0}/>}</h2>
                                    <p className='main-font-style theme-text-size'>Total Projects</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={5} className='pt-5'>
                            <Row>
                                <Col md={6}>
                                    <h2 className='main-font-style main-heading fw-light m-0'>{counterOn && <CountUp start={0} end={2013} duration={2} delay={0}/>}</h2>
                                    <p className='main-font-style theme-text-size'>Cups Coffee</p>
                                </Col>
                                <Col md={6}>
                                    <h2 className='main-font-style main-heading fw-light m-0'>{counterOn && <CountUp start={0} end={10536} duration={2} delay={0}/>}</h2>
                                    <p className='main-font-style theme-text-size'>Total Submitted</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </ScrollTrigger>
                </Container>
            </section>
      </>
    );
}

export default Sales;