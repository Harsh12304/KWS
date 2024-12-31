'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'; // For detecting active route

const Navbar = () => {
    const pathname = usePathname(); // Get current route
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Refs to track dropdown elements
    const dropdownRef = useRef(null);
    const mediaDropdownRef = useRef(null);
    const aboutDropdownRef = useRef(null);

    const toggleDropdown = (setState, currentState) => {
        setState(!currentState);
    };

    // Helper function to determine if the path is under a specific section
    const isActive = (section) => {
        return pathname.includes(section) ? 'text-blue-500' : '';
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
            if (
                mediaDropdownRef.current &&
                !mediaDropdownRef.current.contains(event.target)
            ) {
                setMediaDropdownOpen(false);
            }
            if (
                aboutDropdownRef.current &&
                !aboutDropdownRef.current.contains(event.target)
            ) {
                setAboutDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                    } sm:flex flex-col sm:flex-row gap-4 sm:gap-8 items-center list-none m-0 p-0 w-full sm:w-auto sm:static absolute top-full left-0 bg-white sm:bg-transparent shadow-md sm:shadow-none`}
                >
                    <li className={`relative cursor-pointer ${pathname === '/' ? 'text-blue-500' : ''}`}>
                        <a
                            href="/"
                            className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0"
                        >
                            HOME
                        </a>
                    </li>
                    <li
                        ref={aboutDropdownRef}
                        className={`relative cursor-pointer ${isActive('/about') ? 'text-blue-500' : ''}`}
                    >
                        <span
                            onClick={() => toggleDropdown(setAboutDropdownOpen, aboutDropdownOpen)}
                            className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0"
                        >
                            ABOUT US
                        </span>
                        {aboutDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg w-48 sm:w-56 z-10">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a
                                            href="/about/who-we-are"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Who We Are
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/president-message"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            President's Message
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/vision-mission"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Our Vision & Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/executive-committee"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Executive Committee
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/volunteer-committee"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Volunteer Committee
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/coordination-committee"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Coordination Committee
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        ref={dropdownRef}
                        className={`relative cursor-pointer ${isActive('/downloads') ? 'text-blue-500' : ''}`}
                    >
                        <span
                            onClick={() => toggleDropdown(setDropdownOpen, dropdownOpen)}
                            className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0"
                        >
                            DOWNLOAD
                        </span>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg w-48 sm:w-56 z-10">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a
                                            href="/downloads/souvenirs"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Souvenirs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/downloads/mela"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Kokan Mela
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        ref={mediaDropdownRef}
                        className={`relative cursor-pointer ${isActive('/media') ? 'text-blue-500' : ''}`}
                    >
                        <span
                            onClick={() => toggleDropdown(setMediaDropdownOpen, mediaDropdownOpen)}
                            className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0"
                        >
                            MEDIA
                        </span>
                        {mediaDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg w-48 sm:w-56 z-10">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a
                                            href="/media/photo-gallery"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Photo Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/media/video-gallery"
                                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            Video Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={`relative cursor-pointer ${pathname === '/contact' ? 'text-blue-500' : ''}`}>
                        <a
                            href="/contact"
                            className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0"
                        >
                            CONTACT US
                        </a>
                    </li>
                    <li className={`relative cursor-pointer ${pathname === '/' ? 'text-blue-500' : ''}`}>
                        <a
                            href="#"
                            className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0"
                        >
                            REGISTER
                        </a>
                    </li>
                    <li className={`relative cursor-pointer ${pathname === '/' ? 'text-blue-500' : ''}`}>
                        <a
                            href="/#"
                            className="hover:text-blue-500 transition-colors duration-300 block py-2 sm:py-0"
                        >
                            LOGIN
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
