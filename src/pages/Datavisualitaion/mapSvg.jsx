import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const MapCustom = ({ rangers, arrondissements, updateCurrentArrondissements }) => {
  const arrondissementsRef = useRef()

  useEffect(() => {
    if (arrondissementsRef.current && rangers && rangers.result && rangers.result[0]) {
      updateMap()
    }
  }, [arrondissementsRef, arrondissements, rangers])

  const updateMap = (el) => {
    const colorClass = [
      'ranger-one', // 0
      'ranger-two', // 1
      'ranger-tree', // 2
      'ranger-four' // 3
    ]

    for (const number in arrondissements) {
      const elementArrondissements = arrondissementsRef.current.getElementsByClassName(`${number}`)[0]
      const n = document.createElement('div')
      n.innerHTML = arrondissements[number].length
      elementArrondissements.append(n)
      elementArrondissements.addEventListener(('mouseenter'), () => {
        arrondissementsRef.current.append(elementArrondissements)
      })

      elementArrondissements.addEventListener(('click'), () => {
        updateCurrentArrondissements([Number(number)])
      })

      let memo = 0
      rangers.result.forEach(r => {
        if (arrondissements[number].length > r) {
          memo++
        }
      })

      if (number === 16) {
        console.log(colorClass[memo])
      }

      elementArrondissements.classList.add(colorClass[memo])
    }
  }

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="577.645" height="391.181" viewBox="0 0 577.645 391.181">
        <g ref={arrondissementsRef} className="map__svg" data-name="map-paris 1 3" transform="translate(-3.171 -4.578)">
          <g className="1" data-name="_arrondissement">
            <path className="Tracé_952" data-name="Tracé 952" d="M362.252,219.671l-32.579-22.425L296.08,181.323l13.878-27.279,5.871-1.351L379.756,180.2l-2.114,5.888Z" fill="#ccc" />
          </g>
          <g className="2" data-name="">
            <path className="Tracé_953" data-name="Tracé 953" d="M381.587,177.577,317.965,150.2l55.25-3.235,17.416,5.692Z" fill="#ccc" />
          </g>
          <g className="3" data-name="">
            <path className="Tracé_954" data-name="Tracé 954" d="M435.125,211.58l-51.38-26.413,2.131-5.931,9.154-25.225,27.316,7.84Z" fill="#ccc" />
          </g>
          <g className="4" data-name="">
            <path className="Tracé_955" data-name="Tracé 955" d="M423.47,255.621l-56.339-33.843,15.763-34.4,52.248,26.863,1.719,10.871Z" fill="#ccc" />
          </g>
          <g className="5" data-name="">
            <path className="Tracé_956" data-name="Tracé 956" d="M426.812,263.242l-40.624,34.6-26.912-6.3L343.87,285.6l22.505-61.253,55.814,33.528Z" fill="#ccc" />
          </g>
          <g className="6" data-name="">
            <path className="Tracé_957" data-name="Tracé 957" d="M339.907,284.6l-33.866-16.485-22.786-13.945,35.984-26.142L329.3,200.156l33.232,22.874Z" fill="#ccc" />
          </g>
          <g className="7" data-name="">
            <path className="Tracé_958" data-name="Tracé 958" d="M279.976,253.147l-26.763-4.1-50.568-45.524,33.906-23.4,55.373,1.749,34.767,16.48-10.2,28.273Z" fill="#ccc" />
          </g>
          <g className="8" data-name="">
            <path className="Tracé_959" data-name="Tracé 959" d="M291.8,177.85l-55.176-1.741-18.4-45.206,19.136-21.756,72.614-20.1L306.11,149.72Z" fill="#ccc" />
          </g>
          <g className="9" data-name="">
            <path className="Tracé_960" data-name="Tracé 960" d="M310.45,148.65l3.826-60.045,63.7-.6L373.1,143.956l-56.657,3.315Z" fill="#ccc" />
          </g>
          <g className="10" data-name="0">
            <path className="Tracé_961" data-name="Tracé 961" d="M423.16,158.6l-28.18-8.089L376.8,144.565l4.972-56.978,43.752-2.937L438.886,88.9l22.321,50.029Z" fill="#ccc" />
          </g>
          <g className="11" data-name="1">
            <path className="Tracé_962" data-name="Tracé 962" d="M525.333,245.857l-85.82-22.233-1.727-10.885L424.775,162.09l37.562-19.415Z" fill="#ccc" />
          </g>
          <g className="12" data-name="2">
            <path className="Tracé_963" data-name="Tracé 963" d="M503.71,350.682,543.036,334.7l30.8-36.017,6.9-42.4L530.482,249.7l-89.366-23.145-13.967,31.824,4.869,5.658Z" fill="#ccc" />
          </g>
          <g className="13">
            <path className="Tracé_964" data-name="Tracé 964" d="M366.01,394.027l-5.386-98.781,27.525,6.44L429.7,266.3l69.65,84.175-74.9,40.794-22.488,1.86-10.076-9.876Z" fill="#ccc" />
          </g>
          <g className="14" data-name="4">
            <path className="Tracé_965" data-name="Tracé 965" d="M361.91,395.759,326.336,390.1l-52.648-23.729L235.662,353.6l69.189-82.671,35.365,17.213,16.17,6.248Z" fill="#ccc" />
          </g>
          <g className="15" data-name="5">
            <path className="Tracé_966" data-name="Tracé 966" d="M233.437,350.556l-34.375-14.074-24.625-13.025-25.745,10.691L136.26,310.91l-13.893,1.2,77.806-105.8,50.618,45.57,26.795,4.1,23.143,14.166Z" fill="#ccc" />
          </g>
          <g className="16" data-name="6">
            <path className="Tracé_967" data-name="Tracé 967" d="M118.134,312.319,90.6,299.057,74.2,256.29,3.171,223.78,7.5,197.142l18.059-43.671L67.17,120.058l28.577,9.534,14.016-26.387,59.48,7.3,45.3,21.281,19.106,46.946-35.085,24.218Z" fill="#ccc" />
          </g>
          <g className="17" data-name="7">
            <path className="Tracé_968" data-name="Tracé 968" d="M216.527,129.287l-44.814-21.055,13.3-31.582,56.963-38.063L289.471,10.38l29.776-3.152-8.456,79.054-74.6,20.653Z" fill="#ccc" />
          </g>
          <g className="18" data-name="8">
            <path className="Tracé_969" data-name="Tracé 969" d="M314.1,85.647l8.436-78.884,64.4-1.607,41.135-.379,13.042-.2,2.9,26.875L424.6,82.034l-44.51,2.989Z" fill="#ccc" />
          </g>
          <g className="19" data-name="9">
            <path className="Tracé_970" data-name="Tracé 970" d="M464.155,137.412l-22.526-50.49-13.486-4.291L447.4,32.45l-2.88-26.662L500.443,8l20.592,21.946,6.279,30.026,4.926,25.088,30.225,23.32Z" fill="#ccc" />
          </g>
          <g className="20" data-name="0">
            <path className="Tracé_971" data-name="Tracé 971" d="M579.728,254.248l-50.151-6.568L464.109,140.444l99.952-29.514,7.666,24.116,6.06,80.735,3.028,26.724Z" fill="#ccc" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default MapCustom
