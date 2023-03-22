import React, {useState} from 'react'

const Footer = () => {
  return (
    <>
        <main className='bg-slate-50 pt-10'>
            <section className="bg-black text-white">
                <div className="grid md:grid-cols-4 p-20 gap-5 text-center md:text-left">
                    <div className="px-4 my-2 max-w-[350px]">
                        <ul className="divide-y divide-gray-300">
                            <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20">
                                <p className="mx-4 py-4 font-medium text-lg mb-2 border-b border-orange-500">{/* About Us */}About Us</p>
                            </li>
                            <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none">
                                <p className="p-4">{/* We are an award winning plumbing company with over 20 years experience in the
                                                            business. We provide a
                                                            wide range of services for both residential and commercial clients. */}
                                We are an award winning plumbing company with over 20 years experience in the business. We provide a wide range of services for both residential and commercial clients.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <div>
                            <div className="px-4 my-2 max-w-[350px]">
                                <ul className="divide-y divide-gray-300">
                                    <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20">
                                        <p className="mx-4 py-4 font-medium text-lg mb-2 border-b border-orange-500">Quick Links</p>
                                    </li>
                                    <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <p>Services</p>
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
                                    <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <p>About Us</p>
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
                                    <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <p>Inquery</p>
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
                                    <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20">
                                        <div className="flex items-center justify-between p-4 border-b">
                                        <p>Contact Us</p>
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
                                    <li className="mx-4 py-4 font-medium text-lg mb-2 border-b border-orange-500">
                                        <h3 className="text-lg font-medium leading-6">
                                        Opening Hours
                                        </h3>
                                    </li>
                                    <li className="py-2 flex justify-between items-center border-none">
                                        <div>
                                        <h4 className="text-sm leading-5 font-medium">
                                            MONDAY - FRIDAY
                                        </h4>
                                        <p className="text-sm leading-5 text-gray-500">
                                            8.00AM - 5.00PM
                                        </p>
                                        </div>
                                    </li>
                                    <li className="py-2 flex justify-between items-center">
                                        <div>
                                        <h4 className="text-sm leading-5 font-medium">
                                            SATURDAY
                                        </h4>
                                        <p className="text-sm leading-5 text-gray-500">
                                            9.00AM - 6.00PM
                                        </p>
                                        </div>
                                    </li>
                                    <li className="py-2 flex justify-between items-center">
                                        <div>
                                        <h4 className="text-sm leading-5 font-medium text-gray-500">
                                            SUNDAY
                                        </h4>
                                        <p className="text-sm leading-5 text-gray-900">
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
                                <div className="mx-4 pb-4 border-b border-orange-500">
                                    <h2 className="mx-4 pb-4 pt-2 font-medium text-lg mb-2 border-b border-orange-500">Contact Us</h2>
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
                                <div className="cursor-pointer rounded-lg hover:bg-gray-100 hover:bg-opacity-20 p-4">
                                        <div className="flex flex-col items-start">
                                            <p className="text-lg font-medium">www.website.com</p>
                                            <p className="text-sm text-gray-500">support@email.com</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Footer