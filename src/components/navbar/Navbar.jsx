import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleMediaDropdown = () => setMediaDropdownOpen(!mediaDropdownOpen);

    const navbarStyle = {
        position: 'fixed', // Ensure the navbar stays at the top
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure it appears above other content
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: 'white',
        borderBottom: '2px solid #007bff', // Blue bottom border
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Add a slight shadow for elevation
    };

    const logoStyle = {
        height: '50px',
    };

    const navLinksStyle = {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    };

    const navLinkStyle = {
        position: 'relative',
        cursor: 'pointer',
    };

    const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        zIndex: 1000,
    };

    const dropdownItemStyle = {
        padding: '10px',
        cursor: 'pointer',
    };

    const buttonStyle = {
        padding: '5px 15px',
        border: 'none',
        borderRadius: '50px',
        color: 'white',
        gap: '5px',
    };

    const loginButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#007bff', // Blue
    };

    const registerButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#28a745', // Green
    };

    return (
        <nav style={navbarStyle}>
            {/* Logo */}
            <div className="logo">
                <img src="/kws-logo.png" alt="Logo" style={logoStyle} />
            </div>

            {/* Navigation Links */}
            <ul style={navLinksStyle}>
                <li style={navLinkStyle}>HOME</li>
                <li style={navLinkStyle}>ABOUT US</li>
                <li
                    style={navLinkStyle}
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                >
                    DOWNLOAD
                    {dropdownOpen && (
                        <div style={dropdownStyle}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={dropdownItemStyle}>Item 1</li>
                                <li style={dropdownItemStyle}>Item 2</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li style={navLinkStyle}>CONTACT US</li>
                <li
                    style={navLinkStyle}
                    onMouseEnter={toggleMediaDropdown}
                    onMouseLeave={toggleMediaDropdown}
                >
                    MEDIA
                    {mediaDropdownOpen && (
                        <div style={dropdownStyle}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={dropdownItemStyle}>Item 1</li>
                                <li style={dropdownItemStyle}>Item 2</li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>

            {/* Search and Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <IoSearchSharp size={20} />
                <button style={loginButtonStyle}>LOGIN</button>
                <button style={registerButtonStyle}>REGISTER</button>
            </div>
        </nav>
    );
};

export default Navbar;
