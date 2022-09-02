import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';

import "../App.css"

import hero1 from "../assets/images/hero1.jpeg"
import hero2 from "../assets/images/hero2.jpeg"
import hero3 from "../assets/images/hero3.jpeg"


const HeroSection = () => {

    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 heroImage"
                        src={hero1} alt="First slide"
                    />
                    <Carousel.Caption className='carouselContent'>
                        {/* <h3>First slide label</h3> */}
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="danger" size="lg">ABOUT US</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 heroImage"
                        src={hero2} alt="Second slide"
                    />

                    <Carousel.Caption className='carouselContent'>
                        {/* <h3>Second slide label</h3> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="danger" size="lg">ABOUT US</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 heroImage"
                        src={hero3} alt="Third slide"
                    />

                    <Carousel.Caption className='carouselContent'>
                        {/* <h3>Third slide label</h3> */}
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        <Button variant="danger" size="lg">ABOUT US</Button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default HeroSection