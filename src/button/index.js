import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Button extends Component {
  render() {
    const style = `btn ${this.props.type}`;
    return (
      <button className={style}>
        <span>{this.props.title}</span>
      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type:  PropTypes.string,
  type:  PropTypes.string,
}

Button.defaultProps = {
  type: 'success'
}

export default Button;
