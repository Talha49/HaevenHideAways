"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import Image from 'next/image'
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
            path: '/About',
        },
        {
            id: 3,
            name: 'Bookings',
            path: '/Booking',
        },
        {
            id: 4,
            name: 'Contact',
            path: '/Contact',
        }
    ];

      const {user} = useKindeBrowserClient();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuOnLargeScreen = () => {
        if (window.innerWidth > 768) { 
            setIsMenuOpen(false);
        }
    };

    // Listen to window resize event to close menu on larger screens
    window.addEventListener('resize', closeMenuOnLargeScreen);
    return (
        <div className='flex justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-12'>
            
                <div className='flex items-center gap-1'>
                <Image src='/logo.svg' alt='logo' width={40} height={40} />
            <h2 className="font4 text-lg ">HAEVENHIDEAWAYS</h2>
                    </div>
                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((menu) => (
                        <li key={menu.id}>
                            <Link href={menu.path}>
                                <p className='hover:text-purple-500 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                                    {menu.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

           
            {/* Hamburger Icon for Mobile */}
            <div className='opnenav md:hidden absolute top-4 right-9'>
    <button onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>
</div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
                    <div className='w-[90%]  max-w-xl bg-white rounded-lg shadow-lg p-8'>
                        <div className="flex justify-between items-center mb-6">
                        <div className='flex items-center gap-1'>
                <Image src='/logo.svg' alt='logo' width={30} height={30} />
            <h2 className="font4 text-lg ">HAEVENHIDEAWAYS</h2>
                    </div>
                            <button className='text-gray-800' onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className='mt-8'>
                            {Menu.map((menu) => (
                                <li onClick={() => setIsMenuOpen(!isMenuOpen)} key={menu.id} className='my-4 border-b-2 w-2/3 pb-2'>
                                    <Link href={menu.path}>
                                        <p className='text-gray-800 relative hover:text-purple-500'>
                                            {menu.name}
                                            <span className="absolute left-0 bottom-0 w-full border-b-2 border-purple-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <LoginLink><Button className='mr-2 mt-4'>Login</Button></LoginLink>
                    </div>
                </div>
            )}


{
    user ? <LogoutLink><Button className='hidden md:block'>Sign Out</Button></LogoutLink>

    :
<LoginLink><Button className='hidden md:block'>Login</Button></LoginLink>

}
        </div>
    );
};

export default Header;
