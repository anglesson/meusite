import React from 'react';
import { connect } from 'react-redux';
import FontIcon from '../../components/FontIcon/FontIcon';
import Header from '../../components/Header/Header';

import avatar from '../../assets/img/avatar.jpg';

import './PageMain.css'
import Banner from '../../components/Banner/Banner';

const PageMain = (props) => {

	const site = {
		pageName: 'Anglesson Araujo',
		subtitle: 'CEO MeuSite',
		useBanner: false,
		elements: [
			{
				link: '#link',
				description: 'Facebook',
				typeButton: 'btn-image',
				form: 'squad-circle'
			},
			{
				link: '#link',
				description: 'Instagram',
				icon: 'instagram',
				typeButton: 'button',
				form: 'squad-circle'
			},
			{
				link: '#link',
				description: 'Facebook',
				icon: 'facebook',
				typeButton: 'button',
				form: 'squad-circle'
			},
			{
				link: '#link',
				description: 'Twitter',
				icon: 'twitter',
				typeButton: 'button',
				form: 'squad-circle'
			},
			{
				link: '#link',
				description: 'Github',
				icon: 'github',
				typeButton: 'button',
				form: 'squad-circle'
			},
			{
				link: '#link',
				description: 'LinkedIn',
				icon: 'linkedin',
				typeButton: 'button',
				form: 'squad-circle'
			},
		],
		hasFooter: true
	}

	return (
		<div className="body">
			<div className="container-page">
				<Header
					avatar={avatar} 
					pageName={site.pageName}
					subtitle={site.subtitle}
					useBanner={site.useBanner}
				/>
				<div className="button-list">
					{site.elements.map((el) => {
						return <a className={`${el.typeButton} ${el.form}`} href="#teste">
								<FontIcon icon={el.icon} size={20}/>
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