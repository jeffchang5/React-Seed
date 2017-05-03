import React from 'react';
import LoginWrapper from './wrapper';
import LoginHeader from './header';
import LoginButton from './button';

import Border, { rgba } from './border';


const SunBorder = Border(rgba(206, 78, 80, 1), 40);


export default () => (
  <SunBorder>
    <LoginWrapper>
      <LoginHeader>

      </LoginHeader>
    </LoginWrapper>
  </SunBorder>
);
