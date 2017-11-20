import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return this.props.url ?
            (
                <a href="">
                    <img src="" height="100px" width="100px" />
                </a>
            )
            :
            (
                <img src="" height="100px" width="100px" />
            );
    }
}

export default Logo;