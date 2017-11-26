import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Button extends Component {
  render() {
    const style = `btn ${this.props.type}`;
    return (
      <button className={style}>
        <span className={this.props.animation}>{this.props.title}</span>
      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type:  PropTypes.string,
  animation:  PropTypes.string,
}

Button.defaultProps = {
  type: 'success'
}

export { Button };
