import React from 'react';
import "../App.css"
import Button from 'react-bootstrap/Button';

//svg
import bulb from "../assets/images/bulb.svg"
import nib from "../assets/images/nib.svg"
import magic from "../assets/images/magic.svg"


const Price = () => {
    return (
        <div className='bg-color'>
            <div className='text-center pt-5 pb-5 price container' id='price'>
                <h1 className='mb-4'>OUR PRICING</h1>
                <div className='row d-flex justify-content-between m-4'>
                    <div className='price-card col-md-3'>
                        <img src={bulb} alt="bulb" className='priceIcon' />
                        <h2>basic</h2>
                        <h3 className='mt-5'>$19.29</h3>
                        <Button size="lg" variant="danger" className='mt-5'>PURCHASE NOW</Button>
                    </div>
                    <div className='price-card col-md-3'>
                        <img src={nib} alt="nib" className='priceIcon' />

                        <h2>standard</h2>
                        <h3 className='mt-5'>$39.99</h3>
                        <Button size="lg" variant="danger" className='mt-5'>PURCHASE NOW</Button>
                    </div>
                    <div className='price-card col-md-3'>
                        <img src={magic} alt="magic" className='priceIcon' />

                        <h2>premium</h2>
                        <h3 className='mt-5'>$59.99</h3>
                        <Button size="lg" variant="danger" className='mt-5'>PURCHASE NOW</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Price;