import React from 'react'

const PictoAdress = ({ type }) => {
  return (
    <svg preserveAspectRatio="xMaxYMax slice" xmlns="http://www.w3.org/2000/svg" width="34" height="24" >
      <defs>
        <clipPath id="clip-path">
          <rect width="34" height="34" fill="none"/>
        </clipPath>
      </defs>
      <g id="Grille_de_répétition_1" data-name="Grille de répétition 1" clipPath="url(#clip-path)">
        <g transform="translate(-248 -1017)">
          <g id="pin" transform="translate(248 1017)">
            <g id="Groupe_58" data-name="Groupe 58">
              <path className={`col-${type}`} id="Tracé_859" data-name="Tracé 859" d="M79.265,0a8.7,8.7,0,0,0-8.692,8.692c0,5.948,7.778,14.68,8.11,15.049a.783.783,0,0,0,1.165,0c.331-.369,8.11-9.1,8.11-15.049A8.7,8.7,0,0,0,79.265,0Zm0,13.065a4.373,4.373,0,1,1,4.373-4.373A4.378,4.378,0,0,1,79.265,13.065Z" transform="translate(-70.573)" fill="#ff8500"/>
            </g>
          </g>
        </g>
      </g>
    </svg>

  )
}

export default PictoAdress
