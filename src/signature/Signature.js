import React, {Component} from 'react';
import SocialLinks from '../social-links/SocialLinks';

import './Signature.css';

class Signature extends Component {
	render() {
		return (
			<div className="signature">
				<SocialLinks />
			</div>
		);
	}
}

export default Signature;
