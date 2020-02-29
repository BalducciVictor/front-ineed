
import React, { useState, useEffect } from 'react'
import SignUp from '../../components/Log/Log'
import BoxWrapper from '../../components/BoxWrapper'

const Log = () => {
  const [handler] = useState('singIn')
  return (
    <BoxWrapper >
      <SignUp state={handler}/>
    </BoxWrapper>
  )
}

export default Log
