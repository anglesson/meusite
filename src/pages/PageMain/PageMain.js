import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import avatar from '../../assets/img/avatar.jpg'
import FontIcon from '../../components/FontIcon/FontIcon'

import './PageMain.css'

const PageMain = (props) => {

	const site = {
		pageName: 'Roberto Viera',
		subtitle: 'CEO MeuSite',
		elements: [
			{
				link: '#link',
				description: 'Facebook',
				typeButton: 'btn-image',
				form: 'squad-circle'
			},
			{
				link: '#link',
				description: 'Facebook',
				icon: 'facebook',
				typeButton: 'button',
				form: 'squad-circle'
			},
		],
		hasFooter: true
	}

	return (
		<div className="body">
			<div className="container-page">
				<div className="header">
					<div className="avatar-image">
						<img className="image" src={avatar} alt="Image Page" />
					</div>
					<p style={{ textAlign: 'center' }}>{site.pageName} <br />
						<span style={{ fontSize: '12px', color: '#545454', margin: "0px" }}>{site.subtitle}</span>
					</p>
				</div>
				<div className="button-list">
					{site.elements.map((el) => {
						return <a className={`${el.typeButton} ${el.form}`} href="#teste">
							<FontIcon icon={el.icon} size={20} className="blue"/>
							{el.description}
						</a>
					})}
				</div>
				<div className="footer" hidden={!site.hasFooter}>
					<p>Meu Site</p>
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