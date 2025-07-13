import './Style.css';
import { Container, Row, Col } from 'react-bootstrap';

function Blog() {
    return (
      <>
      <section className='section-padding'>
                <Container>
                    <Row>
                        <Col md={12} className='text-center'>
                            <h2 className='main-font-style fw-bold fs-1'>What kind of Coffee we serve for you</h2>
                            <p className='main-font-style fs-6'>Who are in extremely love with eco friendly system.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center me-4 py-5'>
                        <Col md={3}>
                            <Row>
                                <Col md={12} className='mb-4'>
                                    <img src='https://preview.colorlib.com/theme/coffee/img/g1.jpg.webp' className='img-fluid shadow rounded-2' alt='img_1' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className=''>
                                    <img src='https://preview.colorlib.com/theme/coffee/img/g2.jpg.webp' className='img-fluid shadow rounded-2' alt='img_1' />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={12} className='mb-4'>
                                    <img src='https://preview.colorlib.com/theme/coffee/img/g3.jpg.webp' className='img-fluid shadow rounded-2' alt='img_1' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <img src='https://preview.colorlib.com/theme/coffee/img/g4.jpg' className='img-fluid shadow rounded-2' alt='img_1' />
                                </Col>
                                <Col md={6}>
                                    <img src='https://preview.colorlib.com/theme/coffee/img/g5.jpg.webp' className='img-fluid shadow rounded-2' alt='img_1' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
      </>
    );
}

export default Blog;