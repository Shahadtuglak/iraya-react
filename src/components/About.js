import React from 'react'
import "../App.css"

import laptop from "../assets/images/laptop.svg"

const About = () => {
    return (
        <>
            <div className='about container' id='about'>
                <h1>WHO WE ARE</h1>
                <p> We are a fully in-house digital agency focusing on branding, marketing, web design and development with clients ranging from start-ups, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque. We are a fully in-house digital agency focusing on branding, marketing, web design and development with clients ranging from start-ups, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque. We are a fully in-house digital agency focusing on branding, marketing, web design and development with clients ranging from start-ups, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque.</p>
                <p>web design and development with clients ranging from start-ups, Lorem ipsum dolor sit amet</p>

                <div className='d-flex justify-content-center services-card-top'>
                    <img src={laptop} alt="laptop" className='laptopIcon' />
                </div>
                <div className='services-card-body'>
                    <h3>WEB DEVELOPMENT</h3>
                    <h6>
                        We build websites for the conference, integrating unique content and branding to create.
                    </h6>
                </div>
            </div>



        </>
    )
}

export default About