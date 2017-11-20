import React, {Component} from 'react';
import MenuItem from './MenuItem';

import './MenuBar.css';

class MenuBar extends Component {
    render() {
        return (
            <div className="menu-bar">
                <MenuItem name="Profile" />
                <MenuItem name="Projects" />
                <MenuItem name="Fun Stuff" />
                <MenuItem name="About Me" />
            </div>
        );
    }
}

export default MenuBar;