import React,{ useState , useEffect} from 'react'
import './Form.scss'
import arrow from '../../assets/img/arrow-back.png'
import Api from '../../Api/Api'
import ShowProfile from '../ShowProfile/ShowProfile'

function Form() {
  const [gender, setGender ] = useState('')
  const [ name, setName ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ age, setAge ] = useState('');
  const [ bloodType, setBloodType ] = useState('');
  const [ chronicDiseases, setChronicDiseases ] = useState('');
  const [ drugs, setDrugs ] = useState('');
  const [ moreInformation, setMoreInformation ] = useState('');
  const [ chronicDisease, setChronicDisease ] = useState([]);

  const apiRequest = new Api()

  //modification state chronic disease
  useEffect(() => {
    getDataSchronicDisease();
  });

  //get data Chronic Disease
  const getDataSchronicDisease = () => {
    if ( !chronicDisease.length ) {
      apiRequest.get('/api/maladie_chroniques')
      .then(res => {
        let ChronicDiseases = res.data['hydra:member']
        setChronicDisease(res.data['hydra:member'])
      })
    }
  }
  const listItems = chronicDisease.map((data) =>
  <option key={data.name.toString()}>{data.name}</option>
  );


  
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
              <label>Male</label>
              <input type="radio" checked={ gender === 'Male' ?  true : false} onChange={() => setGender('h')}/>
              <label>Female</label>
              <input type="radio" checked={ gender === 'female' ?  true : false} onChange={() => setGender('f')}/>
            </div>
            <div>
              <label>Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Dupont" required/>
            </div>
            <div>
              <label>First Name</label>
              <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="Martin" required/>
            </div>
            <div>
              <label>Age</label>
              <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="46" required/>
            </div>
            <div>
              <label>Blood type</label>
                <select onChange={(e) => setBloodType(e.target.value)}>
                  <option value=""></option>
                  <option value="O-">O-</option>
                  <option value="O+">O+</option>
                  <option value="B-">B-</option>
                  <option value="B+">B+</option>
                  <option value="A-">A-</option>
                  <option value="A+">A+</option>
                  <option value="AB-">AB-</option>
                  <option value="AB+">AB+</option>
                </select>
            </div>
            <div>
              <label>Chronic disease</label>
              <select onChange={(e) => setChronicDiseases(e.target.value)}>
                {listItems}
              </select>
            </div>
            <div>
              <label>Drug</label>
              <input type="text" placeholder="Acetylleucine mylan 500" onChange={(e) => setDrugs(e.target.value)}/>
            </div>
            <div>
            <label>More information</label>
              <textarea onChange={(e) => setMoreInformation(e.target.value)} />
            </div>
            <input type="submit" value="Save"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form