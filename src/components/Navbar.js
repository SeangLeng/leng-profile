'use client'
import React from 'react'

export default function Navbar() {
    return (

        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 sticky top-0 z-10 w-full">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://web.facebook.com/profile.php?id=100086488516436" className="flex items-center">
                    <img src="https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/329835809_735322284655079_3345566267683874665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDKM0rLosNjEgzcn51JLUQlsYWsTy7q3aWxhaxPLurdghLgugRx1rSwWpgd9aI4kszaopKRdTL1WmvmsdoRZsr&_nc_ohc=hHgVwgMayZcAX-rhLxj&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=00_AfD3xHLC1VRy9Ex-gJO8g9dH_Sdpgxq8aJ67G4KHrVAoLg&oe=6465BF33" className="h-8 mr-3 rounded-full" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SENG SEANG <span className='text-orange-500'>LENG</span> </span>
                </a>
                <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About me</a>
                        </li>
                        <li>
                            <a href="#skill" id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                        </li>
                        
                        <li>
                            <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact me</a>
                        </li>
                        <li>
                            <a href="#getInTouch" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Get in touch</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
