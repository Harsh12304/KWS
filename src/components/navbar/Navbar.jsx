import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleMediaDropdown = () => setMediaDropdownOpen(!mediaDropdownOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-white border-b-2 border-blue-500 shadow-md">
            {/* Logo */}
            <div className="logo">
                <img src="/kws-logo.png" alt="Logo" className="h-12" />
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-5 list-none m-0 p-0">
                <li className="relative cursor-pointer">HOME</li>
                <li className="relative cursor-pointer">ABOUT US</li>
                <li
                    className="relative cursor-pointer"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                >
                    DOWNLOAD
                    {dropdownOpen && (
                        <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg">
                            <ul className="list-none m-0 p-0">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li className="relative cursor-pointer">CONTACT US</li>
                <li
                    className="relative cursor-pointer"
                    onMouseEnter={toggleMediaDropdown}
                    onMouseLeave={toggleMediaDropdown}
                >
                    MEDIA
                    {mediaDropdownOpen && (
                        <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg">
                            <ul className="list-none m-0 p-0">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>

            {/* Search and Buttons */}
            <div className="flex items-center gap-4">
                <IoSearchSharp size={20} className="cursor-pointer" />
                <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                    LOGIN
                </button>
                <button className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600">
                    REGISTER
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
