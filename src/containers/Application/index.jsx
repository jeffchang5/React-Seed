import React, { Component } from 'react';

import Header from 'components/Header';
import Login from 'containers/Login';

import AppWrapper from './wrapper';

export default class Application extends Component {
  render() {
    return (
      <AppWrapper>
        <Header title="sync" />
        <Login />
      </AppWrapper>
    );
  }
}
