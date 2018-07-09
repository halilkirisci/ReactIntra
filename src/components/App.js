import React, { Component } from 'react';
import IncHeader from './IncHeader';
import IncBody from './IncBody';
import IncFooter from './IncFooter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuBilgisi: null,
    };
  }

  handleMenu = menum => {
    console.log(menum);
    this.setState({ menuBilgisi: menum });
    const activebtn = document.getElementById('menu' + menum);
    activebtn.classList.add('m-menu__item--active');
  };

  render() {
    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
        <IncHeader />
        <IncBody onMenuSelect={this.handleMenu} menuBilgisi={this.state.menuBilgisi} />
        <IncFooter />
      </div>
    );
  }
}

export default App;
