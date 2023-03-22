import React from 'react'
import Script from 'next/script'



const Header2 = () => {
  return (
    <nav class="bg-white shadow p-2.5 sticky top-0 z-50">
        <Script src="./script.js" />
        <div class="container mx-auto">
            <div class="flex justify-between">
                <div class="flex justify-center items-center">
                    <div>
                        <a href="index.html">
                            <img src="/hive.png" alt="" class="w-36"/>
                        </a>
                    </div>
                    <div class="hidden md:block ml-8 group relative">
                        <img src="./images/icons/category-icon.svg" alt="" class="w-8 h-8 cursor-pointer"/>
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
                <div class="flex justify-center items-center pr-4 md:pr-0">
                    <div class="hidden md:block -mt-3 mx-3 group">
                        <a href="#"
                            class="text-xl text-gray-500 group-hover:opacity-75 rounded-full h-5 w-5 shadow py-1.5 px-2.5">
                            <i class="fa-solid fa-user"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="absolute top-1 right-4 cursor-pointer mt-5">
                <span class="md:hidden navbar-toggle text-slate-900">
                    <i class="fa-solid fa-bars-staggered" id="toggle-icon"></i>
                    hello world
                </span>
            </div>
        </div>
        <div class="mobile-navbar hidden h-[102vh] bg-white absolute top-0 left-0 text-left shadow overflow-y">
            <div class="text-center pt-2 flex items-center mt-3">
                <a href="index.html" class="m-0 mx-auto">
                    <img src="./images/logo.png" alt="" class="w-36" />
                </a>
            </div>
            <div class="p-3">
                <div class="relative">
                    <span class="absolute top-2.5 left-4">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="search"
                        class="transition w-full text-xs rounded-md p-3 pl-12 bg-slate-100 outline-none outline-1 focus:outline-red-300"
                        placeholder="Search for Tuts, Videos, Tutors etc.." />
                </div>
                <ul class="mt-3 list-none">
                    <li class="py-3">
                        <i class="fa-solid fa-cube text-gray-400 mr-2"></i>
                        Categories
                    </li>
                    <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                        <a href="#">
                            <i class="fa-solid fa-chevron-right text-xs mr-4"></i> HTML
                        </a>
                    </li>
                    <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                        <a href="#">
                            <i class="fa-solid fa-chevron-right text-xs mr-4"></i> CSS
                        </a>
                    </li>
                    <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                        <a href="#">
                            <i class="fa-solid fa-chevron-right text-xs mr-4"></i> Tailwind CSS
                        </a>
                    </li>
                    <li class="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                        <a href="#">
                            <i class="fa-solid fa-chevron-right text-xs mr-4"></i> Bootstrap CSS
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header2