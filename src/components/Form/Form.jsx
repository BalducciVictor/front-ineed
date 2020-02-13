import React from 'react'
import './Form.scss'
import arrow from '../../assets/img/arrow-back.png'

const Form = () => (
  <div className="background">
    <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
    <button className="specialty-button">search a specialty</button>
    <div className="boxWrapper">
      <h1 className="title-form">My new profile</h1>
      <div className="wrap-form">
        <div className='back-to-home'>
          <img className="arrow-back" src={arrow} alt="Arrow back home"/>
          <h2 className="back">Back to home</h2>
        </div>
        <form className="form-profile">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>åååååå
          <label>Gender</label>
          <div>
            <label>
            Male
            <input type="checkbox"/>
            </label>
            <label>
            Female
            <input type="checkbox"/>
            </label>
          </div>
          <div>
            <label>
            Name 
            <input type="text" placeholder="Dupont" required/>
            </label>
          </div>
          <div>
            <label>
            First Name 
            <input type="text" placeholder="Martin" required/>
            </label>
          </div>
          <div>
            <label>
            Age 
            <input type="number" placeholder="46" required/>
            </label>
          </div>
          <div>
            <label>
            Blood type
              <select>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
              </select>
            </label>
          </div>
          <div>
          <label>
          More information
            <textarea />
          </label>
          </div>
          <div>
            <label>
            Chronic disease
            <input type="text" placeholder="Asthma"/>
            </label>
          </div>
          <div>
            <label>
            Drug
            <input type="text" placeholder="Acetylleucine mylan 500"/>
            </label>
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  </div>
)

export default Form;