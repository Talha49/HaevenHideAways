import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
const Footer = () => {


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
  return (
   
    <footer class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="sm:col-span-2">
    
                    <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <div className='flex items-center gap-1'>
                <Image src='/logo.svg' alt='logo' width={30} height={30} />
            <h2 className="font4 text-lg ">HAEVENHIDEAWAYS</h2>
                    </div>
                    </div>
                </div>
    
                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>
    
                    <div class="flex flex-col items-start mt-5 space-y-2 ">
                    {Menu.map((menu) => (
                      
                            <Link key={menu.id} href={menu.path}>
                                <p className='hover:text-purple-500 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                                    {menu.name}
                                </p>
                            </Link>
                      
                    ))}
                    </div>
                </div>
    
                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">More Info</p>
    
                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Privacy Policy</p>
                        <p  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">HeavenHideAways</p>
                        <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Report & Issue</p>
                    </div>
                </div>
            </div>
            
           
            
          
        </div>
    </footer>
  )
}

export default Footer