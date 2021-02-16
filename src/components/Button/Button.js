import React from 'react';

import FontIcon from '../FontIcon/FontIcon'

import './Button.css';

const Button = props => (
  <a className={props.classes} href="#teste">
    <FontIcon icon={props.icon} size={props.size} />
    {props.description}
  </a>
)

export default Button;