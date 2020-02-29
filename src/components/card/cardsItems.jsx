import React, { useState, useEffect } from 'react'
import corbeil from '../../assets/picto/remove.svg'
import PictoNumber from '../pictosSvg/number'
import PictoAddress from '../pictosSvg/adress'
import Clock from '../pictosSvg/clock'
import Api from '../../Api/Api'

const Card = (props) => {
  const { name, address, telephone, click, type, timeEnd, timeStart, openAll, pharmacieHorraires, toogle, remove, isAdd } = props
  const id = props['@id']
  const typeSpeciality = props['@type']
  const [time, setTime] = useState()

  useEffect(() => {
    // primary === hospital
    if (type === 'primary' || openAll) {
      setTime('Open all')
    } else if (timeStart) {
      setTime(`${new Date(timeStart).getHours() - 1}h00` + ' - ' + `${new Date(timeEnd).getHours() - 1}h00`)
    } else if (pharmacieHorraires) {
      Api.get(pharmacieHorraires[0])
        .then(({ data }) => {
          setTime(`${new Date(data.timeStart).getHours() - 1}h00` + ' - ' + `${new Date(data.timeEnd).getHours() - 1}h00`)
        })
    }
  }, [])

  return (
    <div className={`container__card container__card__${toogle && ('toogle' || 'remove')}`} >
      <ul className="card">
        <li className="card__name"> <span className="picto"></span><p>{name}</p></li>
        <hr/>
        <li className="card__address"> <span className="picto"><PictoAddress type={type} /></span> <p>{address}</p></li>
        <li className="card__telephone"><span className="picto"><PictoNumber type={type} /></span><p>{ ('0' + telephone).replace(/(\d{2})/gm, '$& ')}</p></li>
        <li className="card__hours"> <span><Clock type={type}> </Clock></span> <p>{time}</p></li>
      </ul>
      <div onClick={() => { click({ id, typeSpeciality }) }}>
        {remove && <div className={`cta cta--remove cta--${type}`} ><img src={corbeil} className='picto__remove' /></div>}
        {toogle && <div className={`cta cta--${type} ${isAdd && 'isAdd'}`} ><p>{(isAdd && 'Remove to my profile') || 'Add in my list' }</p></div>}
      </div>
    </div>
  )
}

export default Card
