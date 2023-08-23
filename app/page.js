import React from 'react';
import Header from './components/Header';
import MockupsPreview from './components/MockupsPreview';
import DownEmailCTA from './components/DownEmailCTA';
const page = () => {
  return (
    <div>
      <Header />
      <MockupsPreview />
      <DownEmailCTA />
    </div>
  );
};

export default page;
