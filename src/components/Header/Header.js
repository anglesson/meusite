import React from 'react'
import './Header.css'
import AvatarPM from '../../components/AvatarPageMain/AvatarPageMain';
import Banner from '../Banner/Banner';

const Header = (props) => {

  return (
    <div className="header">
      { props.useBanner 
        ? <Banner/>
        : <AvatarPM avatar={props.avatar} pageName={props.pageName} subtitle={props.subtitle} />
      }
    </div>
  )
}


export default Header;