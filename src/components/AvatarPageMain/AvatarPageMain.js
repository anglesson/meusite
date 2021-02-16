import React from 'react'

import './AvatarPageMain.css'

const AvatarPM = (props) => (
  <div className="AvatarPM" hidden={props.useBanner}>
    <div className="avatar-image">
      <img className="image" src={props.avatar} alt="ImagePage" />
    </div>
    <h1>{props.pageName}</h1>
    <p>{props.subtitle}</p>
  </div>
)

export default AvatarPM;