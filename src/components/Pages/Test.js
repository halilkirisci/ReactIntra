import React, { Component } from 'react';
import TestList from '../Parts/Test-List';

class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TestList />
      </div>
    );
  }
}

export default Test;
