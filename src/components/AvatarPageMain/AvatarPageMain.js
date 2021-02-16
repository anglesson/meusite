import React from 'react'

import './AvatarPageMain.css'

const AvatarPM = (props) => (
  <div className="AvatarPM" hidden={props.useBanner}>
    <div className="avatar-image">
      <img className="image" src={props.avatar} alt="Image Page" />
    </div>
    <h2 style={{ textAlign: 'center' }}>{props.pageName}</h2>
    <p>{props.subtitle}</p>
  </div>
)

export default AvatarPM;