"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/',
        },
        {
            id: 2,
            name: 'About',
            path: '/about',
        },
        {
            id: 3,
            name: 'Explore',
            path: '/explore',
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact',
        }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <h2>HAEVENHIDEAWAYS</h2>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
                    <div className='w-4/5 max-w-xl bg-white rounded-lg shadow-lg p-8'>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">HAEVENHIDEAWAYS</h2>
                            <Button>Contact</Button>
                        </div>
                        <ul>
                            {Menu.map((menu) => (
                                <li key={menu.id} className='my-4'>
                                    <Link href={menu.path}>
                                        <p className='text-gray-800 hover:text-purple-500 relative'>
                                            {menu.name}
                                            <span className="absolute left-0 bottom-0 w-full border-b-2 border-purple-500 transition-transform duration-300 transform scale-x-0"></span>
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className='absolute top-4 right-4 text-gray-800' onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
