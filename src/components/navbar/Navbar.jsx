import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = (setState) => {
        clearTimeout(hoverTimeout); // Cancel any pending close operation
        setState(true);
    };

    const handleMouseLeave = (setState) => {
        setHoverTimeout(setTimeout(() => setState(false), 200)); // Delay closing by 200ms
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-blue-500 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-5 py-3">
                {/* Logo Section */}
                <div className="logo">
                    <a href="/home">
                        <img src="/kws-logo.png" alt="Logo" className="h-12" />
                    </a>
                </div>

                {/* Navigation Links */}
                <ul className="flex gap-8 items-center list-none m-0 p-0">
                    <li className="relative cursor-pointer">
                        <a href="/home" className="hover:text-blue-500">HOME</a>
                    </li>
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(setAboutDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setAboutDropdownOpen)}
                    >
                        <span className="hover:text-blue-500">ABOUT US</span>
                        {aboutDropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/about/who-we-are" className="block px-4 py-2 hover:bg-gray-100">
                                            Who We Are
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/president-message" className="block px-4 py-2 hover:bg-gray-100">
                                            President's Message
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/vision-mission" className="block px-4 py-2 hover:bg-gray-100">
                                            Our Vision Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/executive-committee" className="block px-4 py-2 hover:bg-gray-100">
                                            Executive Committee
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(setDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setDropdownOpen)}
                    >
                        <span className="hover:text-blue-500">DOWNLOAD</span>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/downloads/sovenirs" className="block px-4 py-2 hover:bg-gray-100">
                                            Sovenirs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/downloads/konkan-mela" className="block px-4 py-2 hover:bg-gray-100">
                                            Kokan Mela
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="relative cursor-pointer">
                        <a href="/contact" className="hover:text-blue-500">CONTACT US</a>
                    </li>
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(setMediaDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setMediaDropdownOpen)}
                    >
                        <span className="hover:text-blue-500">MEDIA</span>
                        {mediaDropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/media/photo-gallery" className="block px-4 py-2 hover:bg-gray-100">
                                            Photo Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/media/video-gallery" className="block px-4 py-2 hover:bg-gray-100">
                                            Video Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>

                {/* Search and Buttons */}
                <div className="flex items-center gap-4">
                    <IoSearchSharp size={20} className="cursor-pointer hover:text-blue-500" />
                    <a
                        href="/login"
                        className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                    >
                        LOGIN
                    </a>
                    <a
                        href="/register"
                        className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                    >
                        REGISTER
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
