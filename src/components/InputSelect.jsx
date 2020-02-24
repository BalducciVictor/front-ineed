import React, { useState, useEffect } from 'react'

const ImputFiltre = ({ values, value, setValue, aPlaceHolder }) => {
  const [list, setList] = useState([])
  const [currentValues, setCurrentValues] = useState(values)
  const [inputSize, setInputSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const memoCurrentValues = values.filter((val) => list.indexOf(val) === -1)
    setCurrentValues(memoCurrentValues)
  }, [value], [inputSize.height])

  const ThisValueByDefault = ({ aPlaceHolder }) => {
    if (value) {
      return (
        <div className="text__value" >{value}</div>
      )
    } else {
      return (
        <div className="placeholder">{aPlaceHolder}</div>
      )
    }
  }

  const List = () => {
    return (
      list.map((selected, i) => <div className="option__selected" key={`item-list-input-${aPlaceHolder}-${i}`}>{selected}</div>)
    )
  }

  const setAutocomple = (selected) => {
    setValue('')
    const Newlist = list
    Newlist.push(selected)
    setList(Newlist)
  }

  const Autocomplet = ({ values, value }) => {
    return (
      <div className="autocomplet">
        { values.map(autoCompletText => {
          if (autoCompletText.indexOf(value) === 0 && value) {
            return (
              <div onClick={ () => { setAutocomple(autoCompletText) } } >{autoCompletText}</div>
            )
          }
        })
        }
      </div>
    )
  }
  const setSize = (el) => {
    if (el) {
      // inputSize.height = el.offsetHeight
      // inputSize.width = el.offsetWidth
      // console.log(el.offsetWidth)
      // setInputSize(inputSize)
    }
  }
  return (
    <div className={`input__filtre ${false ? 'active' : ''}`}>
      <span ref={el => setSize(el) }>
        {list.length ? <List /> : ''}
        {' '}<ThisValueByDefault aPlaceHolder={aPlaceHolder} value={value} />
      </span>
      <input name={aPlaceHolder} onChange={e => { setValue(e.target.value) }} value={value} type="text"/>
      <Autocomplet values={currentValues} value={value} />
    </div>
  )
}

export default ImputFiltre
