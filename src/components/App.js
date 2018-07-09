import React, { Component } from 'react';
import IncHeader from './IncHeader';
import IncBody from './IncBody';
import IncFooter from './IncFooter';
import * as yol from './Nav/RouteFile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuBilgisi: null,
    };
  }

  componentDidMount = () => {
    if (!this.menuBilgisi) {
      const activeBtn = document.getElementById('menuAnasayfa');
      activeBtn.classList.add('m-menu__item--active');
    }
  };

  handleMenu = menum => {
    console.log(' bilgi ' + menum);
    this.setState({ menuBilgisi: menum });

    const activeBtn = document.getElementById('menu' + menum);
    yol.routes.map((route, i) =>
      document.getElementById('menu' + route.name).classList.remove('m-menu__item--active'),
    );
    activeBtn.classList.add('m-menu__item--active');
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
