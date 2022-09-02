import React from 'react';
import Button from 'react-bootstrap/Button';

const error = () => {
    return (
        <div>
            <h1>404 ERROR</h1>

            <h3>Look like you're lost</h3>
            <h6>the page you are looking for not available!</h6>

            <Button variant="danger" size="lg">BACK TO HOME</Button>

        </div>
    )
}

export default error