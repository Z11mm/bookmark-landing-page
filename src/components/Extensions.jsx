import React from 'react';

import ExtensionCard from './ExtensionCard';

import Chrome from '../assets/images/logo-chrome.svg';
import Firefox from '../assets/images/logo-firefox.svg';
import Opera from '../assets/images/logo-opera.svg';

const Extensions = () => (
  <div>
    <section>
      <div>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favorite you’d like us to prioritize.
        </p>
      </div>

      <div>
        <ExtensionCard
          logo={Chrome}
          prompt={'Add to Chrome'}
          version={'Minimum version 62'}
        />
        <ExtensionCard
          logo={Firefox}
          prompt={'Add to Firefox'}
          version={'Minimum version 55'}
        />
        <ExtensionCard
          logo={Opera}
          prompt={'Add to Opera'}
          version={'Minimum version 46'}
        />
      </div>
    </section>
  </div>
);

export default Extensions;
