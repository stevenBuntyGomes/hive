import React, {useState} from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
        <main className='container mx-auto'>
            <section className="bg-black text-white">
                <div className="grid md:grid-cols-4 p-5 md:p-20 gap-5 text-center md:text-left">
                    <div className="px-4 md:px-0 my-2 max-w-[350px]">
                        <ul className="divide-y divide-gray-300">
                            <li className="cursor-pointer">
                                <p className="py-4 font-medium text-lg mb-2">{/* About Us */}About Us</p>
                            <div className="w-[100px] h-[3px] bg-orange-500 m-auto md:mx-0"></div>
                            </li>
                            <li className="cursor-pointer border-none">
                                <p className="py-4">
                                We are an award winning plumbing company with over 20 years experience in the business. We provide a wide range of services for both residential and commercial clients.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <div>
                            <div className="px-4 my-2 max-w-[350px]">
                                <ul className="divide-y divide-gray-300">
                                    <li className="cursor-pointer">
                                        <p className="py-4 font-medium text-lg mb-2">Quick Links</p>
                                    <div className="w-[100px] h-[3px] bg-orange-500 m-auto md:mx-0"></div>
                                    </li>
                                    <li className="cursor-pointer border-none">
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
                                    <li className="cursor-pointer">
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
                                    <li className="cursor-pointer">
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
                                    <li className="cursor-pointer">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <Link href = "/inquiry">
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
                            <div className="px-4 my-2 max-w-[350px]">
                                <ul className="divide-y divide-gray-200">
                                    <li className="pb-4 font-medium text-lg mb-2">
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
                                        <p className="text-sm leading-5 text-gray-100">
                                            8.00AM - 5.00PM
                                        </p>
                                        </div>
                                    </li>
                                    <li className="py-2 flex md:justify-between justify-center items-center">
                                        <div>
                                        <h4 className="text-sm leading-5 font-medium">
                                            SATURDAY
                                        </h4>
                                        <p className="text-sm leading-5 text-gray-100">
                                            9.00AM - 6.00PM
                                        </p>
                                        </div>
                                    </li>
                                    <li className="py-2 flex md:justify-between justify-center items-center">
                                        <div>
                                        <h4 className="text-sm leading-5 font-medium">
                                            SUNDAY
                                        </h4>
                                        <p className="text-sm leading-5 text-gray-100">
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
                            <div className="px-4 my-2 max-w-[350px]">
                                <div className="mx-4 pb-4">
                                    <h2 className="pb-4  mb-1 pt-2 font-medium text-lg">Contact Us</h2>
                                    <div className="w-[100px] h-[3px] bg-orange-500 m-auto md:mx-0 mb-2"></div>
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex flex-col space-y-1">
                                        <span className="text-base font-medium">14 Tottenham Court Road</span>
                                        <span className="text-base">Bulls Stadium, Califorina</span>
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                        <span className="text-base font-medium">1-234-56-78910</span>
                                        <span className="text-base">1-234-56-78910</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer rounded-lg p-4">
                                        <div className="flex flex-col md:items-start justify-center">
                                            <p className="text-lg font-medium">www.website.com</p>
                                            <p className="text-sm text-gray-500">support@email.com</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-[14px] md:text-[16px] text-center text-gray-500 py-[15px] border-t border-gray-500'>
                    Copyright © 2021 Hive - Haustechnik. All Rights Reserved.
                </div>
            </section>
        </main>
    </>
  )
}

export default Footer