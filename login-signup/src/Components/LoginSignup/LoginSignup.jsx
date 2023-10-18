import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const LoginSignup = () => {
  const [action, setAction] = useState('Sign Up');

  const toggleAction = () => {
    setAction(action === 'Sign Up' ? 'LogIn' : 'Sign Up');
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action === 'Sign Up' ? 'Sign Up' : 'LogIn'}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt='' />
          <input type='text' placeholder='UserName' />
        </div>
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email Id' />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className='forgot-password'>
        Lost Password? <span>Click Here</span>
      </div>
      <div className='submit-container'>
        <div
          className={action === 'LogIn' ? 'submit gray' : 'submit'}
          onClick={toggleAction}
        >
          Sign Up
        </div>
        <div
          className={action === 'SignUp' ? 'submit gray' : 'submit'}
          onClick={toggleAction}
        >
          Log In
        </div>
      </div>
    </div>
  );
};
