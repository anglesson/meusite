import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';

import avatar from '../../assets/img/avatar.jpg';

import './PageMain.css'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

const PageMain = (props) => {

	const site = {
		pageName: 'Anglesson Araujo',
		subtitle: 'CEO Meu Site',
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
					{
						site.elements.map((el) => {
							return <Button
								classes={`${el.typeButton} ${el.form}`}
								icon={el.icon} size={20}
								description={el.description} />
						})
					}
				</div>
				<Footer hasFooter={site.hasFooter} />
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