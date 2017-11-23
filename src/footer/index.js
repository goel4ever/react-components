import React, {Component} from 'react';
import Signature from '../signature';
import Copyright from '../copyright';
import './index.css';

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
