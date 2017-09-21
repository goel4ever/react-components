import React, {Component} from 'react';

class Link extends Component {
	render() {
		const data = this.props.url ?
			<a href={this.props.url} target="_blank">{this.props.content}</a>
			 : this.props.content;
		return data;
	}
}

export default Link;