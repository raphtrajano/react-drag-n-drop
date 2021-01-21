import React from 'react';

import { HomePageWrapper, Arrow, H1 } from './style';

export function HomePage() {
  return (
    <HomePageWrapper>
      <Arrow>↑</Arrow>
      <Arrow>↑</Arrow>
      <H1>Choose one of the items above to navigate</H1>
    </HomePageWrapper>
  );
}
