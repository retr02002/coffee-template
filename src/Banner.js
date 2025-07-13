import './Style.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Banner() {
    return (
        <>
           <section className='main-banner background-properties main-banner-padding'>
                <Container className='mx-auto px-5'>
                    <Row className='align-items-start px-5'>
                        <Col md={7} className='text-white'>
                            <h6 className="text-white text-uppercase fw-bold main-font-style pb-3">Now you can feel the Energy</h6>
                            <h1 className='main-heading fw-bold main-font-style pb-3'>Start your day with
                                a black Coffee</h1>
                            <button className='main-button btn-anim rounded-pill px-5 py-2 main-font-style fw-bold'>BUY NOW</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Banner;