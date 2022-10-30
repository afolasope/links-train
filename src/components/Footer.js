import React from 'react';
import { I4GLogo, ZuriLogo } from '../assets';

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='footer-content'>
        <img src={ZuriLogo} alt="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4GLogo} alt="i4g" />
      </div>
    </footer>
  );
};

export default Footer;
