import React from 'react';
import { Link } from 'react-router-dom';

import { HomePageWrapper } from './style';

export function HomePage() {
  return (
    <HomePageWrapper>
      <h1 style={{ width: '100%' }}>Hey, choose a place to go</h1>
    </HomePageWrapper>
  );
}
