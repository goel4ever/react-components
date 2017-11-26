import React, {Component} from 'react';
import {SocialMedia} from '../social-media';

import './index.css';

class Signature extends Component {
	render() {
		return (
			<div className="signature">
				<SocialMedia type="GitHub" url="https://www.github.com/goel4ever" />
	      <SocialMedia type="LinkedIn" url="https://www.linkedin.com/in/goel4ever/" />
	      <SocialMedia type="Twitter" url="https://www.twitter.com/goel4ever" />
	      <SocialMedia type="Facebook" url="https://www.facebook.com/goel4ever" />
			</div>
		);
	}
}

export default Signature;
