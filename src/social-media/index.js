import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FaGithub from 'react-icons/lib/fa/github';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';

import './index.css';

class SocialMedia extends Component {
  render() {
    let element;
    if (this.props.shape === 'circle') {
      switch(this.props.type) {
        case 'GitHub':
          element = <FaGithubSquare />
          break;
        case 'LinkedIn':
          element = <FaLinkedinSquare />
          break;
        case 'Twitter':
          element = <FaTwitterSquare />
          break;
        case 'Facebook':
          element = <FaFacebookSquare />
          break;
      }
    } else {
      switch(this.props.type) {
        case 'GitHub':
          element = <FaGithub />
          break;
        case 'LinkedIn':
          element = <FaLinkedin />
          break;
        case 'Twitter':
          element = <FaTwitter />
          break;
        case 'Facebook':
          element = <FaFacebook />
          break;
      }
    }

    return this.props.url ?
      (<div className="social-media"><a href={this.props.url} target="_blank">{element}</a></div>)
        : <div className="social-media">{element}</div>;
  }
}

SocialMedia.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  shape: PropTypes.string,
}

SocialMedia.defaultProps = {
  shape: 'circle'
}

export default SocialMedia;
