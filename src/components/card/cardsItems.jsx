import React from 'react'

const Card = ({ name, address, telephone, hours }) => {
  return (
    <div className="container__card">
      <ul className="card">
        <li className="card__name"> <span className="picto"></span><p>{name}</p></li>
        <li className="card__address"><span className="picto"><p>{address}</p></span></li>
        <li className="card__telephone"><span className="picto"><p>{telephone}</p></span></li>
        <li className="card__hours"><span className="picto"><p>{hours}</p></span></li>
      </ul>
    </div>
  )
}

export default Card
