// @flow
import React from 'react';
import { AccountButton, MenuButton, Title } from './styles';
import Wrapper from './wrapper';

export default ({ title }: {title: string}) => (
  <Wrapper>
    <MenuButton> {title} </MenuButton>
    <Title> {title} </Title>
    <AccountButton> {title} </AccountButton>
  </Wrapper>
);
