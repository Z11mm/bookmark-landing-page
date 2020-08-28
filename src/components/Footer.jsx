import React from 'react'

import brandlogo from '../assets/images/logo-bookmark.svg';

const Footer = () => (
  <footer>
    <div>
      <img src={brandlogo} alt='Bookmark logo' />
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </div>

    <div>socials</div>
  </footer>
);

export default Footer;