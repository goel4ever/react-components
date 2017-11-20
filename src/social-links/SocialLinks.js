import React, {Component} from 'react';
import Link from './Link';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';

import './SocialLinks.css';

 class SocialLinks extends Component {
     render() {
        return (
            <div className="social-links">
                <ul>
                    <Link content={<FaFacebookSquare />} url="https://www.facebook.com/goel4ever" />
                    <Link content={<FaGithub />} url="https://www.github.com/goel4ever" />
                    <Link content={<FaLinkedinSquare />} url="https://www.linkedin.com/in/goel4ever/" />
                    <Link content={<FaTwitterSquare />} url="https://www.twitter.com/goel4ever" />
                </ul>
            </div>
        );
     }
 }

 export default SocialLinks;