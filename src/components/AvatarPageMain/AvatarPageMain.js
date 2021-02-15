import React from 'react'

import './AvatarPageMain.css'

const AvatarPM = (props) => (
  <div hidden={props.useBanner}>
    <div className="avatar-image">
      <img className="image" src={props.avatar} alt="Image Page" />
    </div>
    <p style={{ textAlign: 'center' }}>{props.pageName} <br />
      <span style={{ fontSize: '12px', color: '#545454', margin: "0px" }}>{props.subtitle}</span>
    </p>
  </div>
)

export default AvatarPM;