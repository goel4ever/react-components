import React, {Component} from 'react';
import Signature from '../signature/Signature';
import Copyright from '../copyright/Copyright';
import './Footer.css';

// TODO: Have themes in here

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<Signature />
				<Copyright />
			</div>
		);
	}
}

export default Footer;