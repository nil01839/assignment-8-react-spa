import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/about-us">About Us</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;