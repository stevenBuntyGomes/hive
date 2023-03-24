import React, { useState } from "react";
import Link from 'next/link'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    inst
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Header2 = () => {
    const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);

    function toggleMobileNavbar() {
        setMobileNavbarVisible((prevState) => !prevState);
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }

    return (
    <nav className="sticky top-0 z-50">
        <div className="container mx-auto">
        {/* top bar number part starts */}
            <div className={`md:px-20 hidden md:block bg-black md:px-12 md:py-5 md:flex md:w-auto md:flex-grow`}>
                <div className='text-white text-xl font-raleway font-normal md:flex-grow'>
                    Call Us: +43 660 3924728
                </div>
                <div className="text-white gt-sm">
                    <div className="text-sm md:flex-grow">
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </div>
                </div>
            </div>
            {/* top bar number part ends */}
            {/* main navigation bar starts */}
            <div className='bg-white py-5 gt-sm md:px-20 px-5 md:flex md:w-auto md:flex-grow shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]'>
                <div className='md:flex-grow'>
                    <Image src="/hive.png" alt="hive-logo" width={200} height ={50} className="md:h-[50px] md:w-[200px] w-[200px] h-[50px]" />
                </div>
                <div className="hidden md:block text-black gt-sm pt-2">
                    <div className="md:flex-grow text-base">
                        <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                            Home
                        </Link>
                        <Link href="/service" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                            Services
                        </Link>
                        <Link href="/prize" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                            Prizes
                        </Link>
                        <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                            About Us
                        </Link>
                        <Link href="/inquiry" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                            Inquery
                        </Link>
                        <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            {/* main navigation bar ends */}
                {/* <div className="flex justify-between">
                    <div className="flex justify-center items-center">
                        <div className='md:flex-grow'>
                            <Image src="/hive.png" alt="hive-logo" width={200} height ={50} className="md:h-[50px] md:w-[200px] w-[80px] h-[20px]" />
                        </div>
                        <div className="hidden md:block ml-8 group relative">
                            <img src="" alt="" className="w-8 h-8 cursor-pointer" />
                        </div>
                        <div className="hidden md:block ml-16 relative">
                            <span className="absolute top-2.5 left-4">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <input type="search"
                                className="transition w-full min-w-[300px] text-xs rounded-md p-3 pl-12 bg-slate-100 outline-none outline-1 focus:outline-red-300"
                                placeholder="Search for Tuts, Videos, Tutors etc.."/>
                        </div>
                    </div>
                </div> */}

                <div className="absolute top-3 right-6 cursor-pointer mt-5">
                    <span className="md:hidden navbar-toggle text-slate-900 transition duration-500" onClick={toggleMobileNavbar}>
                        <FontAwesomeIcon className="text-2xl" icon={ mobileNavbarVisible ? faTimes : faBars } />
                    </span>
                </div>
        </div>
            
            <div className={`w-[50%] mobile-navbar h-[102vh] bg-white absolute top-0 left-0 text-left shadow overflow-y mobile-navbar 
                        ${mobileNavbarVisible ? "" : "hidden"}`} onClick={stopPropagation}>
                
                <div className="text-center pt-2 flex items-center mt-3">
                    <a href="/" className="m-0 mx-auto">
                        <Image width={200} height ={50} src="/hive.png" alt="" className="w-[200px] h-[50px]" />
                    </a>
                </div>
                
                <div className="p-5">
                    <ul className="mt-3 list-none text-lg font-semibold">
                        <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Home
                            </Link>
                        </li>

                        <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/service">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Services
                            </Link>
                        </li>

                        <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/prize">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Prizes
                            </Link>
                        </li>
                        
                        <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> About Us
                            </Link>
                        </li>

                        <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Inquery
                            </Link>
                        </li>

                        <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Contact
                            </Link>
                        </li>

                    </ul>
                </div>  
            </div>
    </nav>
  )
}

export default Header2