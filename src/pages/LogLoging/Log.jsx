
import React, { useState, useEffect } from 'react'
import SignUp from '../../components/Log/Log'
import BoxWrapper from '../../components/BoxWrapper'

const Log = () => {
  const [handler] = useState('singIn')
  return (
    <BoxWrapper pageName={null} Content={() => <SignUp state={handler}/> } />
  )
}

export default Log
