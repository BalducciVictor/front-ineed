import React from 'react';
import './Form.scss';
import arrow from '../../assets/img/arrow-back.png';
import generateInput from '../';


const model = [
{
  label: "Name",
  type : "text",
}, 
{
  label: "First Name" ,
  type : "text",
},
{
  label: "Age",
  type: "number"
}
,
{
  label: "Blood type",
  type: text,
  option : [
     " O-",
     " O+",
     "B-",
    "B+",
    "A-",
    "A+",
    "AB-",
    "AB+",
  ]
},
{
  label: "Chronic disease",
  type: "text"
},
{
  label :"Drug",
  type: "text"
}
]
const Form = () =>{
  model
  return (
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            
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
           
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;