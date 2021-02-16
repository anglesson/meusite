import React from 'react';

import './Footer.css';

const Footer = (props) => (
  <div className="Footer" hidden={!props.hasFooter}>
    <p>&#169; Copyright 2021 MeuSite</p>
  </div>
)

export default Footer;