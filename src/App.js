import React from 'react';

import Header from './components/Header.js'
import Thought from './components/Thought.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Thought />
      </div>
    );
  }
};