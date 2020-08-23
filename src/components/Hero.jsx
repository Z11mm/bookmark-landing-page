import React from 'react';

import heroImage from '../assets/images/illustration-hero.svg'

const Hero = () => (
  <div>
    <section>
      <h1>A Simple Bookmark Manager</h1>

      <p>
        A clean and simple interface to organize your favorite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>

      <div>
        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
      </div>
    </section>

    <div>
      <img
        src={heroImage}
        alt='An illustration of a device page'
      />
    </div>
  </div>
);

export default Hero;
