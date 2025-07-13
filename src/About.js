import './Style.css';
import { Container, Row, Col} from 'react-bootstrap';

function About() {
    return (
      <>
         <section className='py-5'>
                <Container className='mx-auto px-5'>
                    <Row className='align-items-center justify-content-between'>
                        <Col md={6} className='video-bg background-properties position-relative rounded-2'>
                            <Row className='justify-content-center'>
                                <Col md={2} className='z-3'>
                                    <a href='https://www.youtube.com/' target='_blank'>
                                        <img src='https://preview.colorlib.com/theme/coffee/img/play-icon.png.webp' className='img-fluid' alt='play-button' />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={5} className='px-5'>
                            <p className='text-uppercase p-0 m-0 sub-font'>live coffee making process</p>
                            <h2 className='main-font-style fw-bold fs-1'>We Telecast our Coffee Making Live</h2>
                            <p className='main-font-style fw-bold'>We are here to listen from you deliver exellence</p>
                            <p className='main-font-style fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                            <img src='https://preview.colorlib.com/theme/coffee/img/signature.png.webp' className='img-fluid' alt='Signature' />
                        </Col>
                    </Row>
                </Container>
            </section>
      </>
    );
}

export default About;