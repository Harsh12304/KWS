'use client';
import React, { useState } from 'react';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = (setState) => {
        clearTimeout(hoverTimeout);
        setState(true);
    };

    const handleMouseLeave = (setState) => {
        setHoverTimeout(setTimeout(() => setState(false), 100));
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-blue-500 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-5 py-3">
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <a href="/">
                        <img src="/kws-logo.png" alt="Logo" className="h-10 w-auto sm:h-16" />
                    </a>
                    <span className="text-lg sm:text-2xl font-bold text-blue-500">
                        Kokan Welfare Society, Kuwait
                    </span>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="block sm:hidden text-blue-500 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${
                        mobileMenuOpen ? 'block' : 'hidden'
                    } sm:flex gap-8 items-center list-none m-0 p-0 w-full sm:w-auto sm:static absolute top-full left-0 bg-white sm:bg-transparent shadow-md sm:shadow-none`}
                >
                    <li className="relative cursor-pointer">
                        <a href="/" className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0">
                            HOME
                        </a>
                    </li>
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(setAboutDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setAboutDropdownOpen)}
                    >
                        <span className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0">
                            ABOUT US
                        </span>
                        {aboutDropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg w-48">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/about/who-we-are" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                            Who We Are
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/president-message" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                            President's Message
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/vision-mission" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                            Our Vision Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/executive-committee" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
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
                        <span className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0">
                            DOWNLOAD
                        </span>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg w-48">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/downloads/souvenirs" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                            Souvenirs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/downloads/mela" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                            Kokan Mela
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="relative cursor-pointer">
                        <a href="/contact" className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0">
                            CONTACT US
                        </a>
                    </li>
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(setMediaDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setMediaDropdownOpen)}
                    >
                        <span className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0">
                            MEDIA
                        </span>
                        {mediaDropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg w-48">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/media/photo-gallery" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                            Photo Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/media/video-gallery" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                            Video Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="relative cursor-pointer">
                        <a href="/login" className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0">
                            LOGIN
                        </a>
                    </li>
                    <li className="relative cursor-pointer">
                        <a href="/register" className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0">
                            REGISTER
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
