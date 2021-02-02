import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import avatar from '../../assets/img/avatar.jpg'
import image from '../../assets/img/image.jpg'

import './PageMain.css'

const PageMain = (props) => {
	let { sitename } = useParams();
	return (
		<div className="body">
			<div className="container-page">
				<div className="header">
					<div className="avatar-image">
					<img className="image" src={avatar} alt="Image Page" />
					</div>
					<p>Nome da Página</p>
				</div>
				<div className="button-list">
					<a className="btn-image squad-circle" href="#teste">
						<div>Evento dia 23 JAN 2020</div>
					</a>
					<a className="button squad-circle" href="#teste">
						<div>WhatsApp</div>
					</a>
					<a className="button squad-circle" href="#teste">
						<div>Twitter</div>
					</a>
					<a className="button squad-circle" href="#teste">
						<div>Facebook</div>
					</a>
				</div>
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		corDeFundo: state.site.bc
	}
}

export default connect(mapStateToProps)(PageMain);