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
        <div className="container-full mx-auto">
        {/* top bar number part starts */}
            <div className={`md:px-20 hidden bg-black md:py-5 md:flex md:w-auto md:flex-grow`}>
                <div className='text-white text-xl font-normal md:flex-grow'>
                    Call Us: +43 660 3924728
                </div>
                <div className="text-white gt-sm">
                    <div className="text-sm md:flex-grow">
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-[40px]">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-[40px]">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-[40px]">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-[40px]">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                        <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </div>
                </div>
            </div>

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
                        <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500">
                            Contact
                        </Link>
                    </div>
                </div>
                </div>
                
                <div className="absolute top-3 right-6 cursor-pointer mt-5">
                    <span className="md:hidden navbar-toggle text-slate-900 transition duration-500" onClick={toggleMobileNavbar}>
                        <FontAwesomeIcon className="text-2xl" icon={ mobileNavbarVisible ? faTimes : faBars } />
                    </span>
                </div>
        </div>
            
            <div className={`w-[60%] mobile-navbar h-[102vh] bg-white absolute top-0 left-0 text-left shadow overflow-y mobile-navbar 
                        ${mobileNavbarVisible ? "" : "hidden"}`} onClick={stopPropagation}>
                
                <div className="text-center pt-2 flex flex-col items-center mt-3">
                    <Image src="/hive.png" alt="hive-logo" width={200} height ={50} className="md:h-[50px] md:w-[200px] w-[120px] h-[30px]" />
                </div>
                
                <div className="pl-10">
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
                            <Link href="/about">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> About Us
                            </Link>
                        </li>

                        <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/inquiry">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Inquiry
                            </Link>
                        </li>

                        <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/contact">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Contact
                            </Link>
                        </li>

                    </ul>
                </div>  

                <div className="text-center pt-2 flex flex-col items-center mt-3">
                    <span>
                         Call Us:
                    </span>
                    <a href="tel:+43 660 3924728" className="m-0 mx-auto">
                         +43 660 3924728
                </a>
                </div>


                 
                

            </div>
    </nav>
  )
}

export default Header2