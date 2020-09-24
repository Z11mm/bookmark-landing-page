import React from 'react';

import heroImage from '../assets/images/illustration-hero.svg';

const Hero = () => (
  <div className='hero'>
    <section>
      <div>
        <h1>A Simple Bookmark Manager</h1>
        
        <p>
          A clean and simple interface to organize your favorite websites. Open a
          new browser tab and see your sites load instantly. Try it for free.
        </p>
        
        <div className='btn-browser'>
          <button className='btn-chrome'>Get it on Chrome</button>
          <button className='btn-firefox'>Get it on Firefox</button>
        </div>
      </div>
    </section>

    <div className='hero-image'>
      <img
        src={heroImage}
        alt='An illustration of a device page'
      />
    </div>
  </div>
);

export default Hero;
