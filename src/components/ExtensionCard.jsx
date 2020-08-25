import React from 'react';

const ExtensionCard = ({ logo, prompt, version }) => (
  <div>
    <img src={logo} alt='extension logo' />
    <p>{prompt}</p>
    <p>{version}</p>

    <button>Add & Install Extension</button>
  </div>
);

export default ExtensionCard;
