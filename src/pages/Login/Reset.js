import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Reset.css'

const Reset = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const resetPasswordLink = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
        } else {
            alert('Please enter your email')
        }

    }
    return (
        <div>
            <div className='reset-container'>
                <h2 className='text-center'>Forgot Password ?</h2>
                <p>Don't worry! Enter your email below and we'll email you a link to reset your password. </p>
                <form onSubmit={resetPasswordLink}>
                    <label htmlFor="Email">Email Address</label>
                    <input ref={emailRef} type="email" id='Email' placeholder='you@example.com' />
                    <input type="submit" value="Reset" />
                </form>
            </div>
        </div>
    );
};

export default Reset;