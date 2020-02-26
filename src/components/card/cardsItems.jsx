import React from 'react'
import corbeil from '../../assets/picto/remove.svg'
const Card = ({ name, address, telephone, hours, type }) => {
  return (
    <div className="container__card">
      <ul className="card">
        <li className="card__name"> <span className="picto"></span><p>{name}</p></li>
        <li className="card__address"><span className="picto"><p>{address}</p></span></li>
        <li className="card__telephone"><span className="picto"><p>{telephone}</p></span></li>
        <li className="card__hours"><span className="picto"><p>{hours}</p></span></li>
      </ul>
      <div className={`cta cta--remove cta--${type}`}>
        <img src={corbeil} className='picto__remove' />
      </div>
    </div>
  )
}

export default Card
