import React, { Component } from 'react';
import $ from 'jquery';
<<<<<<< HEAD

class Resim extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dosya: null,
      imageStatus: 'loading',
    };

    //this.GetResim = this.GetResim.bind(this);
  }

  componentDidMount = () => {
    console.log('kod:' + this.props.kod);
    this.GetResim(this.props.kod);
  };

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  GetResim(hash) {
    console.log('http://172.17.1.110/intapi/api/ResimBase64/?id=' + hash);
    $.get(
      `http://172.17.1.110/intapi/api/ResimBase64/?kod=${hash}&width=64&height=64&dd=${Math.random()}`,
      dosya => {
        console.log('%%%%http://172.17.1.110/intapi/api/Resim/?id=' + hash);
        this.setState({ dosya });
      },
    );
=======
class Resim extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null };
    console.log(props.kod);
>>>>>>> 6e5d8eacb2f1b3eca70136da90b513cbe02f1b6d
  }

  componentDidMount = () => {
    $.get(
      'http://172.17.1.110/intapi/api/ResimBase64/?kod=' + this.props.kod + '&width=64&height=64',
      res => {
        this.setState({ res });
      },
    );
  };

  render() {
<<<<<<< HEAD
    if (!this.state.dosya) {
      return <span>Yükleniyeeee..</span>;
    }
    //console.log('render dosya :' + this.state.dosya);
    return (
      <div>
        <img
          className="img-fluid"
          src={this.state.dosya}
          alt={this.props.key}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
      </div>
    );
=======
    console.log('dolduuu ' + this.state.res);
    if (!this.state.res) {
      return <span>Loading...</span>;
    }
    return <img className="img-fluid rounded" src={this.state.res} alt={this.props.key} />;
>>>>>>> 6e5d8eacb2f1b3eca70136da90b513cbe02f1b6d
  }
}
export default Resim;
