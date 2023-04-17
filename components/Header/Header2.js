import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getSettingsAction } from "@/Action/SettingsAction";
import NProgress from "nprogress"
import Router from "next/router"

Router.onRouteChangeStart = url => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Header2 = () => {
    const dispatch = useDispatch();
    const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);
    const { settings, loading } = useSelector((state) => state.settings);
    const { app } = useSelector((state) => state.downloadApp);


    function toggleMobileNavbar() {
        setMobileNavbarVisible((prevState) => !prevState);
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }

    const getSettingsHandler = async () => {
        dispatch(getSettingsAction())
    }

    useEffect(() => {
        getSettingsHandler();
    }, [dispatch]);

    return (
        <nav className="sticky top-0 z-50">
            <div className="container-full mx-auto">
                {/* top bar number part starts */}
                <div className={`md:px-20 hidden bg-black md:py-5 md:flex md:w-auto md:flex-grow`}>
                    <div className='text-white text-xl font-normal md:flex-grow sans-serif'>
                        Call Us:
                        <a href="tel:+43 660 3924728" className="m-0 mx-auto font-normal sans-serif mr-[40px] cursor-pointer ml-[5px]">
                            {settings && settings.top_number}
                        </a>
                    </div>
                    <div className="text-white gt-sm">
                        <div className="text-sm md:flex-grow">
                            <a href={`${settings && settings.fb_link}`} target='_blank' className="block mt-4 md:inline-block text-sm md:mt-0 text-white hover:text-orange-500 mr-[40px] cursor-pointer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href={`${settings && settings.in_link}`} target='_blank' className="block mt-4 md:inline-block text-sm md:mt-0 text-white hover:text-orange-500 mr-[40px] cursor-pointer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href={`${settings && settings.tw_link}`} target='_blank' className="block mt-4 md:inline-block text-sm md:mt-0 text-white hover:text-orange-500 mr-[40px] cursor-pointer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href={`${settings && settings.li_link}`} target='_blank' className="block mt-4 md:inline-block md:mt-0 text-white hover:text-orange-500 mr-[40px] cursor-pointer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href={`${settings && settings.yo_link}`} target='_blank' className="block mt-4 md:inline-block md:mt-0 text-white hover:text-orange-500 cursor-pointer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-white py-5 gt-sm md:px-20 px-5 md:flex md:w-auto justify-between shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]'>
                    <div className='flex'>
                        <Link href="/">
                            <Image src="/hive.png" alt="hive-logo" width={200} height={50} className="md:h-[50px] md:w-[200px] w-[200px] h-[50px] block" />
                        </Link>
                    </div>
                    <div className="hidden md:flex text-black gt-sm pt-2">
                        <div className=" text-base">
                            <Link href="/" className="block mt-4 md:inline-block text-sm md:mt-0 text-black hover:text-orange-500 mr-6">
                                Home
                            </Link>
                            <Link href="/service" className="block mt-4 md:inline-block text-sm md:mt-0 text-black hover:text-orange-500 mr-6">
                                Services
                            </Link>
                            <Link href="/prize" className="block mt-4 md:inline-block text-sm md:mt-0 text-black hover:text-orange-500 mr-6">
                                Prizes
                            </Link>
                            <Link href="/about" className="block mt-4 md:inline-block text-sm md:mt-0 text-black hover:text-orange-500 mr-6">
                                About Us
                            </Link>
                            <Link href="/inquiry" className="block mt-4 md:inline-block text-sm md:mt-0 text-black hover:text-orange-500 mr-6">
                                Inquiry
                            </Link>
                            <Link href="/contact" className="block mt-4 md:inline-block text-sm md:mt-0 text-black hover:text-orange-500">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Setup */}
                <div className="absolute top-3 right-6 cursor-pointer mt-5">
                    <span className="md:hidden navbar-toggle text-slate-900 transition duration-500" onClick={toggleMobileNavbar}>
                        <FontAwesomeIcon className="text-2xl" icon={mobileNavbarVisible ? faTimes : faBars} />
                    </span>
                </div>
            </div>

            <div
                className={`w-[60%] mobile-navbar h-[102vh] bg-white absolute top-0 left-0 text-left shadow overflow-y-scroll mobile-navbar ${mobileNavbarVisible ? "" : "hidden"}`} onClick={stopPropagation}>

                <div className="text-center pt-2 flex flex-col items-center mt-3">
                    <Link href='/'>
                        <Image src="/hive.png" alt="hive-logo" width={200} height={50} className="md:h-[50px] md:w-[200px] w-[120px] h-[30px]" />
                    </Link>
                </div>

                <div className="">
                    <ul className="mt-3 list-none text-lg font-semibold">
                        <Link href="/">
                            <li className="transition pl-10 py-2 cursor-pointer hover:bg-slate-100 hover:opacity-80 border-b border-slate-100">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Home
                            </li>
                        </Link>

                        <Link href="/service">
                            <li className="transition pl-10 py-2 cursor-pointer hover:bg-slate-100 hover:opacity-80 border-b border-slate-100">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Services
                            </li>
                        </Link>

                        <Link href="/prize">
                            <li className="transition pl-10 py-2 cursor-pointer hover:bg-slate-100 hover:opacity-80 border-b border-slate-100">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Prizes
                            </li>
                        </Link>

                        <Link href="/about">
                            <li className="transition pl-10 py-2 cursor-pointer hover:bg-slate-100 hover:opacity-80 border-b border-slate-100">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> About Us
                            </li>
                        </Link>

                        <Link href="/inquiry">
                            <li className="transition pl-10 py-2 cursor-pointer hover:bg-slate-100 hover:opacity-80 border-b border-slate-100">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Inquiry
                            </li>
                        </Link>

                        <Link href="/contact">
                            <li className="transition pl-10 py-2 cursor-pointer hover:bg-slate-100 hover:opacity-80 border-b border-slate-100">
                                <i className="fa-solid fa-chevron-right text-xs mr-4"></i> Contact
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className="text-center pt-2 flex flex-col items-center mt-3">
                    <span className="text-lg font-semibold">
                        Call Us:
                    </span>
                    <a href="tel:+43 660 3924728" className="m-0 mx-auto font-normal sans-serif">
                        {settings && settings.top_number}
                    </a>
                </div>

                <div className="text-center pt-2 flex flex-col items-center mt-3">
                    {/* <Link href="/inquiry" className="bg-black hover:bg-orange-500 hover:text-white text-white font-medium py-2 px-5 rounded-md">
                        Apple App
                    </Link>
                    <Link href="/contact" className="bg-black hover:bg-orange-500 hover:text-white text-white font-medium py-2 px-5 rounded-md mt-2">
                        Android App
                    </Link> */}

                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mb-10">
                        <a href={`${app && app.apk_app_link}`} target='_blank'
                            className="bg-gray-800 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-orange-500 dark:focus:ring-gray-700">
                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"
                                data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                                </path>
                            </svg>
                            <div className="text-left">
                                <div className="mb-1 text-xs">Get in on</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                            </div>
                        </a>
                        <a href={`${app && app.mac_app_link}`} target='_blank'
                            className="bg-gray-800 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-orange-500 dark:focus:ring-gray-700">
                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"
                                data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                </path>
                            </svg>
                            <div className="text-left">
                                <div className="mb-1 text-xs">Download on the</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                            </div>
                        </a>

                    </div>

                </div>


            </div>
        </nav>
    )
}

export default Header2