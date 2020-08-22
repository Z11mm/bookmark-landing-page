import React from "react";

import brandlogo from '../assets/images/logo-bookmark.svg'

const Header = () => (
  <header>
    <div>
      <img src={brandlogo} alt='' />
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