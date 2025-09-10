import React, { Component } from 'react';
import './CustomHeader.css';

class CustomHeader extends Component {

    render() { 
        return (
            <header>
                <h2>Avatarize</h2>
                <button className='login-button'>Login</button>
            </header>
        );
    }
}
 
export default CustomHeader;