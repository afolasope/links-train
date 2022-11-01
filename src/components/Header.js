import React, { useState } from 'react';
import { cameraIcon, profile, shareIcon, shareMobile } from '../assets';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="header">
      <div className="img-container">
        <div className="profile-wrapper">
          <div
            className="img"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <img id="profile__img" src={profile} alt="user" />
            <div className={clicked ? 'overlay' : null}></div>
            <div className={clicked ? 'camera-icon' : 'hidden'}>
              <img src={cameraIcon} alt="camera" />
            </div>
          </div>
        </div>
        <p id="twitter">@_afolasope</p>
        <p id="slack">adebanjo afolasope</p>
      </div>
      <div className="share-icon">
        <img
          src={shareIcon}
          alt="share"
          className="tablet-share"
        />
        <img src={shareMobile} alt="share" className="mobile-share" />
      </div>
    </div>
  );
};

export default Header;
