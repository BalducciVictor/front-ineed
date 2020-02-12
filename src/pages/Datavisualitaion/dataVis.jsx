import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map from './mapSvg';
import Arrondissements from './Arrondissements';

export default class DataVis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      currentArrondissements: {},
    };
    this.updateCurrentArrondissements = this.updateCurrentArrondissements.bind(this);


    this.formatClassName = (name) => name.replace(/(eme\s)|(er\s)/gm, '_');

    this.setNumberArrondissement = (name) => name.match(/(\d+)/gm)[0];

    this.sortArrayByArrondissements = (data) => data.sort((a, b) => parseFloat(a.total) - parseFloat(b.total)).reverse();
  }

  componentDidMount() {
    const { data } = this.props;
    const arrondissements = this.clearArrondissements(data);
    this.setState({
      data: this.fitre(arrondissements),
    });
  }


  updateCurrentArrondissements(arrondissements) {
    this.setState({ currentArrondissements: arrondissements });
  }

  clearArrondissements(arrondissements) {
    return arrondissements.map((arrondissement) => {
      const model = {
        name: '',
        number: null,
        hopitals: [],
        centreDeSantes: [],
        total: null,
        className: '',
      };

      model.name = arrondissement.name;
      model.number = this.setNumberArrondissement(arrondissement.name);
      model.hopitals = arrondissement.hopitals.length;
      model.centreDeSantes = arrondissement.centreDeSantes.length;
      model.total = arrondissement.centreDeSantes.length + arrondissement.hopitals.length;
      model.className = this.formatClassName(arrondissement.name);


      return model;
    });
  }


  fitre(json) {
    const array = [[], [], []];
    const newJson = this.sortArrayByArrondissements(json);
    for (let i = 0; i < array.length; i++) {
      for (let j = Math.floor(20 / 3) * i; j < Math.floor((20 / 3) * (i + 1)); j++) {
        array[i].push(newJson[j]);
      }
    }
    return array;
  }


  render() {
    const { data, currentArrondissements } = this.state;
    const { updateCurrentArrondissements } = this;
    return data
      ? (
        <div className="view">
          <Map
            updateCurrentArrondissements={(arrondissements) => updateCurrentArrondissements(arrondissements)}
            arrondissementsGroup={data}
          />
          { currentArrondissements.name ? <Arrondissements arrondissements={currentArrondissements} /> : ''}
        </div>
      )
      : '';
  }
}


DataVis.propTypes = {
  data: PropTypes.array,
};
