import React, { useState } from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'

const Header2 = () => {
    const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);

    function toggleMobileNavbar() {
        setMobileNavbarVisible((prevState) => !prevState);
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }

    return (
    <nav class="bg-white shadow p-2.5 sticky top-0 z-50">
        <div class="container mx-auto">
                <div class="flex justify-between">
                    <div class="flex justify-center items-center">
                        <div>
                            <a href="/">
                                <img src="/hive.png" alt="" class="w-36" />
                                <Image src="/hive.png" alt="hive-logo" width={8} height ={8} className="w-[8px] h-[8px]" />
                            </a>
                        </div>
                        <div class="hidden md:block ml-8 group relative">
                            <img src="" alt="" class="w-8 h-8 cursor-pointer" />
                        </div>
                        <div class="hidden md:block ml-16 relative">
                            <span class="absolute top-2.5 left-4">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <input type="search"
                                class="transition w-full min-w-[300px] text-xs rounded-md p-3 pl-12 bg-slate-100 outline-none outline-1 focus:outline-red-300"
                                placeholder="Search for Tuts, Videos, Tutors etc.."/>
                        </div>
                    </div>
                </div>

                <div class="absolute top-1 right-4 cursor-pointer mt-5">
                    <span class="md:hidden navbar-toggle text-slate-900" onClick={toggleMobileNavbar}>
                        <FontAwesomeIcon icon={ mobileNavbarVisible ? faTimes : faBars } />
                    </span>
                </div>
        </div>
            
            <div class={`mobile-navbar h-[102vh] bg-white absolute top-0 left-0 text-left shadow overflow-y mobile-navbar 
                        ${mobileNavbarVisible ? "" : "hidden"}`} onClick={stopPropagation}>
                
                <div class="text-center pt-2 flex items-center mt-3">
                    <a href="/" class="m-0 mx-auto">
                        <img src="/hive.png" alt="" class="w-36" />
                    </a>
                </div>
                
                <div class="p-5">
                    <ul class="mt-3 list-none">
                        <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/">
                                <i class="fa-solid fa-chevron-right text-xs mr-4"></i> Home
                            </Link>
                        </li>

                        <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/service">
                                <i class="fa-solid fa-chevron-right text-xs mr-4"></i> Services
                            </Link>
                        </li>

                        <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/prize">
                                <i class="fa-solid fa-chevron-right text-xs mr-4"></i> Prizes
                            </Link>
                        </li>
                        
                        <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/">
                                <i class="fa-solid fa-chevron-right text-xs mr-4"></i> About Us
                            </Link>
                        </li>

                        <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/">
                                <i class="fa-solid fa-chevron-right text-xs mr-4"></i> Inquery
                            </Link>
                        </li>

                        <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                            <Link href="/">
                                <i class="fa-solid fa-chevron-right text-xs mr-4"></i> Contact
                            </Link>
                        </li>

                    </ul>
                </div>  
            </div>
    </nav>
  )
}

export default Header2