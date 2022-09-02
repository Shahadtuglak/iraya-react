import React from 'react'
import "../App.css"
import Carousel from 'react-bootstrap/Carousel';

import shahad from "../assets/images/shahad.jpg";


const Testimonials = () => {
    return (
        <>
            < div className='testimonials container' id='testimonials'>
                <h1>Testimonials</h1>
                <h5> - HAPPY CLIENTS - </h5>

                <div className='testimonials-card'>
                    <Carousel>

                        <Carousel.Item className='single-testimonials-card'>
                            <div className='testimonials-bg'>

                            </div>
                            <Carousel.Caption className='carouselContent'>
                                <img
                                    className="testimonials-image"
                                    src={shahad} alt="First slide"
                                />
                                <h5>Shahad Tuglak</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className='single-testimonials-card'>
                            <div className='testimonials-bg'>

                            </div>
                            <Carousel.Caption className='carouselContent'>
                                <img
                                    className="testimonials-image"
                                    src={shahad} alt="First slide"
                                />
                                <h5>Shahad Tuglak</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className='single-testimonials-card'>
                            <div className='testimonials-bg'>

                            </div>
                            <Carousel.Caption className='carouselContent'>
                                <img
                                    className="testimonials-image"
                                    src={shahad} alt="First slide"
                                />
                                <h3>Shahad Tuglak</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className='single-testimonials-card'>
                            <div className='testimonials-bg'>

                            </div>
                            <Carousel.Caption className='carouselContent'>
                                <img
                                    className="testimonials-image"
                                    src={shahad} alt="First slide"
                                />
                                <h3>Shahad Tuglak</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>



                </div>

            </ div>

        </>
    )
}

export default Testimonials