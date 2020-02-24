import React from 'react';

const PopWrap = ({ Content , data ,  setData}) => {

  const closeData = ( ) => {
    let NewData = Object.assign({}, data)
    NewData.state = false
    setData(NewData)
  }
  const Pop = ({data, setData}) => {
    return(
      <div className='container-pop'>
      <div className="pop-wrap">
        <section className="parent-relative">
          <div className="cross" onClick={closeData}>x</div>
          <Content />
        </section>
      </div>
    </div>
    )
  }
  return(
      data.state ? <Pop /> : ''
    )
}

export default PopWrap;