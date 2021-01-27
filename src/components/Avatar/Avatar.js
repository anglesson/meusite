import React from 'react';
import {
    Form,
  } from 'react-bootstrap';
import './Avatar.css';

const Avatar = (props) => {
    return (
        <div class="personal-image">
            <label class="label">
                <Form.File.Input style={{ display: "none" }} />
                <figure class="personal-figure">
                    <img src={props.avatar} className="personal-avatar" alt="avatar"></img>
                    <figcaption class="personal-figcaption">
                        <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"></img>
                    </figcaption>
                </figure>
            </label>
        </div>
    )
}

export default Avatar;