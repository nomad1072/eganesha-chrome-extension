import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'
import Thought from './components/Thought.js';

class EganeshaApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Thought />
      </div>
    );
  }
};

ReactDOM.render(<EganeshaApp />, document.getElementById('root'))