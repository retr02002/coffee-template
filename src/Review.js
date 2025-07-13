import './Style.css';
import { Container, Row, Col} from 'react-bootstrap';

function Review() {
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
                    <Row className='justify-content-evenly pt-5'>
                        <Col md={5} className=''>
                            <img src='https://preview.colorlib.com/theme/coffee/img/b1.jpg.webp' className='img-fluid' alt='coffee' />
                            <div className='py-4'>
                                <button className='rounded-pill sub-button btn-anim px-4 py-1 main-font-style theme-text-size me-1'>Travel</button>
                                <button className='rounded-pill sub-button btn-anim px-4 py-1 main-font-style theme-text-size'>Life Style</button>
                            </div>
                            <h5 className='main-font-style fw-bold'>Portable latest Fashion for young women</h5>
                            <p className='main-font-style theme-text-size'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <p className='main-font-style theme-text-size fw-bold'>31st January, 2018</p>
                        </Col>
                        <Col md={5} className=''>
                            <img src='https://preview.colorlib.com/theme/coffee/img/b2.jpg.webp' className='img-fluid' alt='coffe_2' />
                            <div className='py-4'>
                                <button className='rounded-pill sub-button btn-anim px-4 py-1 main-font-style theme-text-size me-1'>Travel</button>
                                <button className='rounded-pill sub-button btn-anim px-4 py-1 main-font-style theme-text-size'>Life Style</button>
                            </div>
                            <h5 className='main-font-style fw-bold'>Portable latest Fashion for young women</h5>
                            <p className='main-font-style theme-text-size'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <p className='main-font-style theme-text-size fw-bold'>31st January, 2018</p>
                        </Col>
                    </Row>
                </Container>
            </section>
      </>
    );
}

export default Review;