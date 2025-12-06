"use client";
import React, { useState } from 'react'
// Assuming you have this library installed for icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; 

// --- 1. NavLink Component (Handles Smooth Scroll) ---
// This component uses a standard 'a' tag instead of next/link
const NavLink = ({ href, title, setNavbarOpen }) => {
    const handleScroll = (e) => {
        // 1. Check if it's a hash link (e.g., #about)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                // 2. Scroll to the element smoothly
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // 3. Close mobile menu if setNavbarOpen is provided
                if (setNavbarOpen) {
                     setNavbarOpen(false);
                }
            } else {
                // IMPORTANT: If you see this warning in your browser console, 
                // it means you forgot to add id="about" or id="contact" to your sections.
                console.warn(`Smooth scroll target not found for hash: ${href}`);
            }
        }
    };

    return (
        <a 
            href={href} 
            onClick={handleScroll}
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition duration-200'
        >
            {title}
        </a>
    );
};

// --- 2. MenuOverlay Component (For Mobile View) ---
// This component renders the list of links for the mobile menu
const MenuOverlay = ({ links, setNavbarOpen }) => {
    return (
        <ul className='flex flex-col py-4 items-center bg-[#121212]/95'>
            {links.map((link, index) => (
                <li key={index}>
                    {/* NavLink handles the scrolling and closing the menu */}
                    <NavLink 
                        href={link.path} 
                        title={link.title} 
                        setNavbarOpen={setNavbarOpen} 
                    />
                </li>
            ))}
        </ul>
    );
};
// --------------------------------------------------

const navLinks = [
    {
        title: 'About',
        path: '#about',
    },
    
    {
        title: 'Contact',
        path: '#contact',
    }
];

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    // Props passed to the MenuOverlay to allow links to close the menu
    const menuOverlayProps = { links: navLinks, setNavbarOpen: setNavbarOpen };

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212]/95 backdrop-blur-sm'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                
                {/* Home Link (using standard <a> tag) */}
                <a href={"/"} className='text-2xl md:text-5xl text-white font-semibold '>Jenish</a>
                
                {/* Mobile Menu Button */}
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button 
                                onClick={() => setNavbarOpen(true)} 
                                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition'
                                aria-label="Open menu"
                            >
                                <Bars3Icon className='h-5 w-5'/>
                            </button>
                        ):(
                            <button 
                                onClick={() => setNavbarOpen(false)} 
                                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition'
                                aria-label="Close menu"
                            >
                                <XMarkIcon className='h-5 w-5'/>
                            </button>
                        )
                    }
                </div>
                
                {/* Desktop Menu */}
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    {/* NavLink contains the smooth scroll logic */}
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
            {/* Mobile Menu Overlay */}
            {navbarOpen ? <MenuOverlay {...menuOverlayProps} /> : null}
        </nav>
    );
};

export default Navbar;