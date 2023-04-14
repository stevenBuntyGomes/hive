import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { getSettingsAction } from "@/Action/SettingsAction";


const Footer = () => {
    const dispatch = useDispatch();
    const {settings, loading} = useSelector((state) => state.settings);
    const getSettingsHandler = async () => {
        dispatch(getSettingsAction())
    }
    useEffect(() => {
        getSettingsHandler();
    }, [dispatch]);
  return (
    <>
        <main className='container-full mx-auto sans-serif'>
            <section className="bg-black text-white">
                <div className="grid md:grid-cols-4 p-5 md:p-20 gap-5 text-center md:text-left">
                    <div className="px-4 md:px-0 my-2 md:max-w-[350px]">
                        <ul className="divide-y divide-gray-300">
                            <li className="cursor-pointer">
                                <p className="py-4 font-medium text-lg mb-2">{/* About Us */}About Us</p>
                            <div className="w-[100px] h-[3px] bg-orange-500 m-auto md:mx-0"></div>
                            </li>
                            <li className="border-none">
                                <p className="py-4">
                                {settings && settings.about_message}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <div>
                            <div className="px-4 my-2 md:max-w-[350px]">
                                <ul className="divide-y divide-gray-300">
                                    <li className="">
                                        <p className="py-4 font-medium text-lg mb-2">Quick Links</p>
                                    <div className="w-[100px] h-[3px] bg-orange-500 m-auto md:mx-0"></div>
                                    </li>
                                    <li className="cursor-pointer hover:text-orange-500 border-none">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <Link href = "/service">
                                            Services
                                        </Link>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:text-orange-500">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <Link href = "/about">
                                            About Us
                                        </Link>
                                        
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:text-orange-500">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <Link href = "/inquiry">
                                            Inquery
                                        </Link>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:text-orange-500">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <Link href = "/contact">
                                            Contact Us
                                        </Link>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div>
                            <div className="px-4 my-2 md:max-w-[350px]">
                                <ul className="">
                                    <li className="pb-2 font-medium text-lg">
                                        <h3 className="py-4 font-medium text-lg mb-2">
                                        Opening Hours
                                        </h3>
                                    <div className="w-[100px] h-[3px] bg-orange-500 m-auto md:mx-0"></div>
                                    </li>
                                    <li className="py-2 flex md:justify-between justify-center items-center">
                                        <div>
                                        <h4 className="text-sm leading-5 font-medium">
                                            MONDAY - FRIDAY
                                        </h4>
                                        <p className="text-sm leading-5 text-gray-100 cursor-pointer hover:text-orange-500">
                                            8.00AM - 5.00PM
                                        </p>
                                        </div>
                                    </li>
                                    <li className="py-2 flex md:justify-between justify-center items-center">
                                        <div>
                                        <h4 className="text-sm leading-5 font-medium">
                                            SATURDAY
                                        </h4>
                                        <p className="text-sm leading-5 text-gray-100 cursor-pointer hover:text-orange-500">
                                            9.00AM - 6.00PM
                                        </p>
                                        </div>
                                    </li>
                                    <li className="py-2 flex md:justify-between justify-center items-center">
                                        <div>
                                        <h4 className="text-sm leading-5 font-medium">
                                            SUNDAY
                                        </h4>
                                        <p className="text-sm leading-5 text-gray-100 cursor-pointer hover:text-orange-500">
                                            Closed
                                        </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div>
                            <div className="px-4 my-2 md:max-w-[350px]">
                                <div className="mx-4 pb-4">
                                    <h2 className="py-4 mb-1 font-medium text-lg">Contact Us</h2>
                                    <div className="w-[100px] h-[3px] bg-orange-500 m-auto md:mx-0 mb-2"></div>
                                    <div className="flex flex-col space-y-2 mt-5 md:mt-0">
                                        <div className="flex flex-col space-y-1">
                                            <span className="text-base font-medium">{settings && settings.first_address}</span>
                                            <span className="text-base">{settings && settings.second_address}</span>
                                        </div>
                                        <div className="flex flex-col space-y-1 cursor-pointer">
                                              <a href={`tel: ${settings && settings.first_number}`} className="text-base font-medium mt-2 md:mt-0 cursor-pointer hover:text-orange-500">
                                                  {settings && settings.first_number}
                                              </a>
                                              
                                              <a href={`tel: ${settings && settings.second_number}`} className="text-base cursor-pointer hover:text-orange-500">
                                                  {settings && settings.second_number}
                                              </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg px-4">
                                    <div className="flex flex-col md:items-start justify-center">
                                        <a href={`${settings && settings.web_link}`} target='_blank' className="text-sm cursor-pointer hover:text-orange-500 mb-2">
                                            {settings && settings.web_link}
                                        </a>

                                        <a href={`mailto: ${settings && settings.first_email}`} target='_blank' className="text-sm cursor-pointer hover:text-orange-500 text-gray-500">
                                            {settings && settings.first_email}
                                        </a>
                                        
                                        <a href={`mailto: ${settings && settings.second_email}`} target='_blank' className="text-sm cursor-pointer hover:text-orange-500 text-gray-500">
                                            {settings && settings.second_email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-[14px] md:text-[16px] text-center text-gray-500 py-[15px] border-t border-gray-500'>
                      Copyright © 2022. All rights reserved by <a className='text-orange-500' target='_blank' href="https://www.hive.com/">Hive</a>. || Design & Develop by  
                      <a className='text-orange-500' target='_blank' href = "https://www.fexdvers.com/"> Fexdvers</a>.
                </div>
            </section>
        </main>
    </>
  )
}

export default Footer