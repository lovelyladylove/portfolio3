import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../img/1.png';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body" style={{ height: '900px', width: 'auto', margin: '20px 70px 20px 70px' }}>
				<Grid className="contact-grid">
					<Cell col={6}>
						<img src={avatar} alt="avatar" style={{ height: '400px', width: '450px' }} />
						<h1 style={{ fontStyle: 'bold', width: '75%', margin: 'auto' }}> Lovely Wagemann </h1>
						<h5>Web Developer</h5>
					</Cell>
					<Cell col={6}>
						<h2>Let's get connected!</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontfamily: 'Anton' }}>
										<i className="fa fa-phone-square" aria-hidden="true">
											{' '}
											+4915168862502{' '}
										</i>
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontfamily: 'Anton' }}>
										<i className="fa fa-envelope-square" aria-hidden="true">
											{' '}
											lovewagemann@gmail.com{' '}
										</i>
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontfamily: 'Anton' }}>
										<i className="fas fa-globe-americas" aria-hidden="true">
											<a href="https://lovewagemann.de/" target="_blank">
												{' '}
												https://lovewagemann.de/{' '}
											</a>{' '}
										</i>
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontfamily: 'Anton' }}>
										<i className="fa fa-home" aria-hidden="true">
											{' '}
											58332 Schwelm, Deutschland{' '}
										</i>
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
