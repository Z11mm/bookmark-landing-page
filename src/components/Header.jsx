import React from "react";

import brandlogo from '../assets/images/logo-bookmark.svg'

const Header = () => (
  <header>
    <div>
      <div className='brand-logo'>
        <img src={brandlogo} alt='Brand Logo' />
      </div>
      <nav>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;