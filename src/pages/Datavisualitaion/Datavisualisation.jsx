import React from 'react';
import axios from 'axios';
import Datvis from './dataVis.jsx';
import './styleDataVis.scss'
// import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton';
import MedicalProfile from '../../components/MedicalProfile/MedicalProfile';


class PersonalInformation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      centres: null,
      specialites: null,
      dataClean: null,
    };
  }

  async componentDidMount() {
    axios.get('http://13.59.220.41/api/arrondissements')
      .then((res) => {
        this.setState({
          data: res.data['hydra:member'],
        });
      });
  }


  render() {
    const { data } = this.state;
      return (
        <div className="personal-information datavis">
          <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
          <button className="specialty-button">search a specialty</button>
          <div className="boxWrapper-i">
            <h1 className="title-information">My profile</h1>
            <div className="wrap-information">
            </div>
            { data ? <Datvis data={data} /> : <div /> }
          </div>
        </div>
      );
    }
  }

export default PersonalInformation;