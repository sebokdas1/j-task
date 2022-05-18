import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className='d-md-flex w-50 mx-auto mt-5 page404'>
                <img width="50%" src="https://www.freeiconspng.com/uploads/error-icon-32.png" alt="" />
                <div>
                    <h2>Page not found</h2>
                    <h3>We're sorry, we couldn't find the page you requested.</h3>
                    <Link to='/'>back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;