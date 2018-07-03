import React, { Component } from 'react';
import IncHeader from './IncHeader';
import IncBody from './IncBody';
import IncFooter from './IncFooter';

class App extends Component {
  render() {
    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
        <IncHeader />
        <IncBody />
        <IncFooter />
      </div>
    );
  }
}

export default App;
