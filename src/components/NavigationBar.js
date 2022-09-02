import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css"


const NavigationBar = () => {

    // change the color of Navbar while scrolling
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true);
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <Navbar expand="lg" className={color ? 'navbar navbar-bg' : 'navbar'} fixed="top">
            <Container>
                <Navbar.Brand href="/" className="navbar-brand">IRAYA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='humberger' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="#about">about</Nav.Link> */}
                        <Nav.Link href="#team">team</Nav.Link>
                        <Nav.Link href="#link">contact</Nav.Link>
                        <Nav.Link href="#price">price</Nav.Link>

                        <Nav.Link href="#testimonials">testimonials</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar