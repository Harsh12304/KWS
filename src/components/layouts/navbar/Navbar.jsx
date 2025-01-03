'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const dropdownRef = useRef(null);
    const mediaDropdownRef = useRef(null);
    const aboutDropdownRef = useRef(null);

    const toggleDropdown = (setState, currentState) => {
        setState(!currentState);
    };

    const isActive = (section) => {
        return pathname.includes(section) ? 'bg-[#EBD060] text-[#193540]' : 'text-[#193540]';
    };

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
        <nav className="fixed top-0 left-0 right-0 text-center z-50 bg-white border-b-2 shadow-md font-[\'Exo 2\']">
            <div className="container mx-auto flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-4">
                    <a href="/">
                        <img src="/kws-logo.png" alt="Logo" className="h-10 w-auto sm:h-16" />
                    </a>
                    <span className="text-base md:text-lg lg:text-2xl font-bold text-[#193540]">
                        Kokan Welfare Society, Kuwait
                    </span>
                </div>

                <button
                    className="flex items-center  sm:hidden text-[#193540] focus:outline-none"
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

                <ul
                    className={`${
                        mobileMenuOpen ? 'block' : 'hidden'
                    } sm:flex flex-col sm:flex-row gap-4 sm:gap-8 items-center list-none m-0 p-0 w-full sm:w-auto sm:static absolute top-full left-0 bg-white sm:bg-transparent shadow-md sm:shadow-none`}
                >
                    <li className={`relative cursor-pointer ${pathname === '/' ? 'text-[#EBD060]' : 'text-[#193540]'}`}>
                        <a
                            href="/"
                            className="hover:text-[#EBD060] active:text-[#EBD060] transition-colors duration-300 block py-3 sm:py-1 text-sm md:text-lg lg:text-xl"
                        >
                            HOME
                        </a>
                    </li>
                    <li
                        ref={aboutDropdownRef}
                        className={`relative cursor-pointer ${pathname.includes('/about') ? 'text-[#EBD060]' : 'text-[#193540]'}`}
                    >
                        <span
                            onClick={() => toggleDropdown(setAboutDropdownOpen, aboutDropdownOpen)}
                            className="hover:text-[#EBD060] active:text-[#EBD060] transition-colors duration-300 block py-3 sm:py-1 text-sm md:text-lg lg:text-xl"
                        >
                            ABOUT US
                        </span>
                        {aboutDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg w-48 sm:w-56 z-10">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a
                                            href="/about/who-we-are"
                                            className={`block px-4 py-2 ${isActive('/about/who-we-are')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
                                        >
                                            Who We Are
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/president-message"
                                            className={`block px-4 py-2 ${isActive('/about/president-message')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
                                        >
                                            President's Message
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/vision-mission"
                                            className={`block px-4 py-2 ${isActive('/about/vision-mission')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
                                        >
                                            Our Vision & Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/executive-committee"
                                            className={`block px-4 py-2 ${isActive('/about/executive-committee')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
                                        >
                                            Executive Committee
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/volunteer-committee"
                                            className={`block px-4 py-2 ${isActive('/about/volunteer-committee')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
                                        >
                                            Volunteer Committee
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about/coordination-committee"
                                            className={`block px-4 py-2 ${isActive('/about/coordination-committee')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
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
                        className={`relative cursor-pointer ${pathname.includes('/downloads') ? 'text-[#EBD060]' : 'text-[#193540]'}`}
                    >
                        <span
                            onClick={() => toggleDropdown(setDropdownOpen, dropdownOpen)}
                            className="hover:text-[#EBD060] active:text-[#EBD060] transition-colors duration-300 block py-3 sm:py-1 text-sm md:text-sm lg:text-lg"
                        >
                            DOWNLOAD
                        </span>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg w-48 sm:w-56 z-10">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a
                                            href="/downloads/souvenirs"
                                            className={`block px-4 py-2 ${isActive('/downloads/souvenirs')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
                                        >
                                            Souvenirs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/downloads/mela"
                                            className={`block px-4 py-2 ${isActive('/downloads/mela')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
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
                        className={`relative cursor-pointer ${pathname.includes('/media') ? 'text-[#EBD060]' : 'text-[#193540]'}`}
                    >
                        <span
                            onClick={() => toggleDropdown(setMediaDropdownOpen, mediaDropdownOpen)}
                            className="hover:text-[#EBD060] active:text-[#EBD060] transition-colors duration-300 block py-3 sm:py-1 text-sm md:text-sm lg:text-lg"
                        >
                            MEDIA
                        </span>
                        {mediaDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg w-48 sm:w-56 z-10">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a
                                            href="/media/photo-gallery"
                                            className={`block px-4 py-2 ${isActive('/media/photo-gallery')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
                                        >
                                            Photo Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/media/video-gallery"
                                            className={`block px-4 py-2 ${isActive('/media/video-gallery')} hover:bg-[#EBD060] hover:text-[#193540] transition-colors duration-300 text-sm md:text-lg lg:text-base`}
                                        >
                                            Video Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={`relative cursor-pointer ${pathname === '/contact' ? 'text-[#EBD060]' : 'text-[#193540]'}`}>
                        <a
                            href="/contact"
                            className="hover:text-[#EBD060] active:text-[#EBD060] transition-colors duration-300 block py-3 sm:py-1 text-sm md:text-sm lg:text-lg"
                        >
                            CONTACT US
                        </a>
                    </li>
                    <li className={`relative cursor-pointer ${pathname === '/contact' ? 'text-[#EBD060]' : 'text-[#193540]'}`}>
                        <a
                            href="/contact"
                            className="hover:text-[#EBD060] active:text-[#EBD060] transition-colors duration-300 block py-3 sm:py-1 text-sm md:text-sm lg:text-lg"
                        >
                            Register
                        </a>
                    </li>
                    <li className={`relative cursor-pointer ${pathname === '/' ? 'text-[#EBD060]' : 'text-[#193540]'}`}>
                        <a
                            href="/#"
                            className="login-btn hover:text-[#193540] active:text-[#EBD060] transition-colors duration-300 block py-3 sm:py-1 rounded-2xl bg-[#EBD060] px-5 text-[#193540] font-bold text-sm md:text-sm lg:text-lg"
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
