
import React, { useState } from 'react'
import SignUp from '../../components/Log/Log'

const Log = () => {
  const [handler] = useState('singIn')
  return (
    <div>
      <SignUp state={handler}/>
    </div>
  )
}

export default Log
