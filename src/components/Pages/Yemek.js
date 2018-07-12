import React, { Component } from 'react';
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';

const AsyncTypeahead = asyncContainer(Typeahead);
class Yemek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allowNew: false,
      isLoading: false,
      multiple: false,
      options: [],
    };
  }

  _handleSearch = query => {
    //debugger;
    this.setState({ isLoading: true });
    fetch(`http://172.17.4.29/intapi/api/Kisi/${query}`)
      .then(resp => resp.json())
      .then(options => {
        this.setState({
          isLoading: false,
          options,
        });
      })
      .catch(error => console.log('hata', error));
  };

  render() {
    return (
      <div>
        <div>Yemek Sayfası</div>

        <AsyncTypeahead
          {...this.state}
          delay={400}
          onSearch={this._handleSearch}
          searchText="Araniyeee"
          placeholder="Rehber Ara..."
          renderMenuItemChildren={(option, props) => (
            <div>
              {option.PERSONEL_AD} {option.SOYAD}
              <div>
                <small>Tel: {option.İş_Tel}</small>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Yemek;
