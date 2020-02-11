import React from 'react';
import './SwitchButton.scss';

class SwitchButton extends React.Component {

  state = {
    active: ''
  }
  addActiveClass(e){
      const clicked = e.target.id
      if(this.state.active === clicked) { 
          this.setState({active: ''});
      } else {
          this.setState({active: clicked})
     }
  }

  render() {
      return (
        <div className="switch-button">
          <label>
          My list
          <input name="radio" type="radio" value="optionone" id="optionone" checked/>
          </label>
          <label className="right">
          My information
          <input name="radio" type="radio" value="optiontwo" id="optiontwo" />
          </label>
          <span aria-hidden="true"></span>
        </div>
      );
    }
  }

export default SwitchButton;