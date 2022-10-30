import React from 'react';
import { profile, shareIcon, shareMobile } from '../assets';

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img id='profile__img' src={profile} alt="user picture" />
        <p id='twitter'>@_afolasope</p>
        <p id='slack'>adebanjo afolasope</p>
      </div>
      <div className="share-icon">
        <img src={shareIcon} alt="share" className='tablet-share' />
        <img src={shareMobile} alt="share"  className='mobile-share'/>
      </div>
    </div>
  );
};

export default Header;
