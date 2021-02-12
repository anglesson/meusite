import React from 'react'
import './FontIcon.css'

const FontIcon = (props) => {
  return(
    <span className="btn-icon">
      <i className={`fa fa-${props.icon}`} aria-hidden="true" style={{fontSize: `${props.size}px`}}></i>
    </span>
  )

}

export default FontIcon;