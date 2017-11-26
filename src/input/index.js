import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Text extends Component {
  render() {
    return (
      <input type="text" id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} />
    );
  }
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export { Text };
