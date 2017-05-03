// @flow
import React from 'react';
import Navigation from './menu';
import Wrapper from './wrapper';

export default ({ title }: {title: string}) => (
  <Wrapper>
    <Navigation
      links={[
        { title: 'Sync', url: 'http://google.com' },
        { title: 'Home', url: 'http://google.com' },
        { title: 'About', url: 'http://google.com' },
        { title: 'Login', url: 'http://google.com' },
      ]}
    />
  </Wrapper>
);
