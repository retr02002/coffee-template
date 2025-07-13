import logo from './logo.svg';
import { ReactFragment, useState } from 'react';
import './Style.css';
import { Route, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Coffee from './Coffee';
import App from './App';
import Review from './Review';
import Blog from './Blog';

function Navbr() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 135) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <header className={navbar ? 'navbar-scroll pt-3 pb-2 fixed-top btn-anim' : 'bg-transparent pt-3 pb-2 fixed-top btn-anim'}>
                <Container className='px-5 py-0'>
                    <Row className='justify-content-end px-5 py-0 d-none d-sm-none d-md-flex'>
                        <Col xl={7} lg={8} md={12}>
                            <ul className='d-flex justify-content-end m-0 list list-unstyled main-font-style text-white'>
                                <li className='link'>Mon-Fri: 8am to 2pm</li>
                                <li className='link'>Sat-Sun: 11am to 4pm</li>
                                <li className='link'>(012) 6985 236 7512</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='px-sm-3 px-md-4 px-lg-5 px-xl-5 py-0'>
                        <Navbar bg='transparent' className='p-0' data-bs-theme='dark'>
                            <Container>
                                <Navbar.Brand href="#home">
                                    <img src="https://preview.colorlib.com/theme/coffee/img/logo.png.webp" className='img-fluid' alt='Logo' />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto text-uppercase d-sm-none d-none d-md-none d-lg-flex">
                                        <Nav.Link><span className='link'><Link to="/" className='text-white main-font-style py-2 text-decoration-none'>Home</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/about" className='text-white main-font-style py-2 text-decoration-none'>About</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/coffee" className='text-white main-font-style py-2 text-decoration-none'>Coffee</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/review" className='text-white main-font-style py-2 text-decoration-none'>Review</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/blog" className='text-white main-font-style py-2 text-decoration-none'>Blog</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/sales" className='text-white main-font-style py-2 text-decoration-none'>Sales</Link></span></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                <button className='btn d-md-flex d-lg-none' onClick={handleShow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </button>

                                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                                    <Offcanvas.Header className='navbar-scroll text-white' closeButton>
                                        <Offcanvas.Title>Main Menu</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className='navbar-scroll text-white text-center'>
                                        <Nav.Link><span className='link'><Link to="/" className='text-white main-font-style py-2 text-decoration-none'>Home</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/about" className='text-white main-font-style py-2 text-decoration-none'>About</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/coffee" className='text-white main-font-style py-2 text-decoration-none'>Coffee</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/review" className='text-white main-font-style py-2 text-decoration-none'>Review</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/blog" className='text-white main-font-style py-2 text-decoration-none'>Blog</Link></span></Nav.Link>
                                        <Nav.Link><span className='link'><Link to="/sales" className='text-white main-font-style py-2 text-decoration-none'>Sales</Link></span></Nav.Link>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </Container>
                        </Navbar>
                    </Row>
                </Container>
            </header>
        </>
    );
}

export default Navbr;