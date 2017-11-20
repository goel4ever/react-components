import React, {Component} from 'react';

class MenuItem extends Component {
    render() {
        return this.props.url ? (
            <h3 className="menu-item">{this.props.name}</h3>
        ) : (
            <a href={this.props.url}><h3 className="menu-item">{this.props.name}</h3></a>
        );
    }
}

export default MenuItem;