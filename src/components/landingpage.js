import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../img/1.png';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img src={avatar} alt="avatar" style={{ margin: '70px 0 0 0' }} />
						<div className="banner-text">
							<h1>Full Stack Web Developer</h1>
							<hr />
							<p>HTML | CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB | </p>

							<div className="social-links">
								{/* Facebook */}
								<a
									href="https://www.facebook.com/love.wagemann"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-facebook-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://github.com/lovelyladylove" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* LinkedIn */}
								<a
									href="https://www.linkedin.com/in/lovely-wagemann/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* FreeCodeCamp */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-free-code-camp" aria-hidden="true" />
								</a>

								{/* LinkIn */}
								<a href="https://codepen.io/lovelyladylove/" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-codepen" aria-hidden="true" />
								</a>

								{/* Xing */}
								<a
									href="https://www.xing.com/profile/Lovely_Wagemann/cv"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-xing-square" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
