import React, {Component} from 'react';

function LinkB({url}) {
	return (
		url ? <a href={this.props.url} target="_blank">{this.props.content}</a> : null
	);
}

class Link extends Component {
	render() {
		const data = this.props.url ?
			<a href={this.props.url} target="_blank">{this.props.content}</a> : null;
		return data;
	}
}

export default Link;