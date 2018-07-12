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
      .then(resp => {
        return {
          KOD: resp.KOD,
          PERSONEL_AD: resp.PERSONEL_AD,
          SOYAD: resp.SOYAD,
          İş_Tel: resp.İş_Tel,
        };
      })
      .then(({ options }) => {
        console.log(options);
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
          labelKey={option =>
            `${option.KOD} ${option.PERSONEL_AD} ${option.SOYAD} ${option.İş_Tel}`
          }
          minLength={3}
          onSearch={this._handleSearch}
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
