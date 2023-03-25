import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightLong
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const ServiceDetails = () => {
    const [group, setGroup] = useState('');

    const onClick = () => {

    }

    const options = [
        {
            name: 'Qualified Team',
        },
        {
            name: 'Affordable pricing',
        },
        {
            name: 'Quick service',
        },
        {
            name: 'Full service',
        },
        {
            name: 'Emergency power solutions',
        },
        {
            name: 'Virtually any electrical',
        },
    ];
  return (
    <>
        <main className=' '>
            <div className="relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10 mb-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div className='md:w-[1440px] md:m-auto'>
                        <div className='mt-16 md:p-10 p-5 text-center text-white  '>
                            <h2 className='font-bold text-[42px] pb-2'>SERVICE DETAILS</h2>
                            <h6 className='font-bold text-[20px]'>HOME-SERVICES-SERVICE DETAILS</h6>
                        </div>
                    </div>
                </div>
              </div>
              
            <div className='md:w-[1440px] md:m-auto sm:m-auto m-5 md:py-10 py-5'>
                <div className='md:flex'>
                    <div className='w-full md:w-[30%] md:pl-10 mb-10 md:mb-0 text-center md:text-left'>
                        <div className="my-10">

                            <div>
                                <div className="md:p-10 p-5 my-2 md:max-w-[350px] shadow-[0_0_15px_2px_rgba(0,0,0,0.3)]">
                                    <ul className="divide-y">
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20">
                                            <p className="  font-bold mx-4 py-4 text-[20px] mb-2 ">
                                               OUR SERVICES
                                            </p>
                                        </li>
                                        <div className="w-[152px] h-[3px] bg-orange-500 mx-auto md:mx-0 md:ml-[15px]"></div>
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black hover:text-orange-500  ">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Air Conditioning</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Electrical Service</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Drain Cleaning</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Plumbing Design</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Swear Line Repair</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Toilet Installation & Repair</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Water Heating & Cooling</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Security Systems</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>General Plumbing</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                        <li className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 text-black hover:text-orange-500">
                                            <div className="flex items-center justify-between p-4 border-b border-black">
                                            <p>Cabling Installation</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 "
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
                        <div className='my-10'>
                            <div>
                                <div className="my-2 md:max-w-[350px] shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] md:p-10 p-5">
                                    <ul className="divide-y">
                                        <li className="border-0 hover:bg-gray-100 hover:bg-opacity-20">
                                            <p className=" font-bold mx-4 py-4 text-[20px] mb-2">
                                               GET FREE ESTIMATE
                                            </p>
                                        </li>
                                        <div className="w-[152px] h-[3px] bg-orange-500 mx-auto md:mx-0 md:ml-[15px]"></div>
                                        <li className="border-none hover:bg-gray-100 hover:bg-opacity-20">
                                            <h3 className="  font-bold mx-4 py-4 text-xl md:text-2xl mb-2">
                                               123-456-78910
                                            </h3>
                                        </li>
                                        <li className="border-none hover:bg-gray-100 hover:bg-opacity-20">
                                            <p className="  mx-4 py-4 text-base mb-2">
                                               Our online scheduling and payment system is safe
                                            </p>
                                        </li>
                                        <div className="mb-5 text-center">
                                            <button onClick={onClick} className="bg-black hover:bg-orange-500 text-white font-base text-lg py-2 px-4 rounded">
                                                REQUEST WITH ONLINE FORM
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                          </div>
                          
                        <div className='my-10'>
                            <div>
                                <div className="md:p-10 p-5 my-2 md:max-w-[350px] shadow-[0_0_15px_2px_rgba(0,0,0,0.3)]">
                                    <ul className="divide-y">
                                        <li className="border-0 hover:bg-gray-100 hover:bg-opacity-20">
                                            <p className="font-bold py-4 text-[20px] mb-2">
                                               DOWNLOAD
                                            </p>
                                        </li>
                                        <div className="w-[152px] h-[3px] bg-orange-500 mx-auto md:mx-0"></div>
                                        <div className="mb-5 mt-10 text-left border-none">
                                            <Link href="#"
                                                className="mb-5 w-full sm:w-auto bg-white text-black border-2 border-orange-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                <img className="mr-3 w-5 h-7" src = '/fontawesome.png'/>
                                                
                                                <div className="text-left">
                                                    <div className="-mt-1 font-sans text-sm font-semibold mr-14">our brochures </div>
                                                </div>
                                            </Link>
                                            <Link href="#"
                                                className="w-full sm:w-auto bg-white text-black border-2 border-orange-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                <img className="mr-3 w-5 h-7" src = '/fontawesome.png'/>
                                                <div className="text-left">
                                                    <div className="-mt-1 font-sans text-sm font-semibold mr-5">Our company details </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      </div>
                      
                    <div className='w-full md:w-[70%] pr-0 pl-0 md:pl-0 md:mb-0 md:pr-10 md:pb-10 pt-10 text-center md:text-left'>
                        <div className='md:mb-10 mb-5 md:pb-10 pb-5'>
                            <div className='md:mb-10 md:pb-10'>
                                <img 
                                    src = '/serviceDetails01.png'
                                    className="md:w-[100%] relative z-10"
                                />
                            </div>
                            <div className="mb-10">
                                <h5 className="font-bold uppercase md:text-[42px] mt-10 md:mt-0 text-4xl mb-5">QUALITY SERVICE IS OUR GUARANTEE</h5>
                                <p className="text-left">We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts. Qualified team Affordable pricing Quick service We offer a wide range of plumbing services catered to both residential and
                                </p>
                                <div className="py-10">
                                    <div className="grid grid-cols-2">
                                        {options.map((option, index) => (
                                        <label className="inline-flex items-center text-left" key={index}>
                                            <input
                                            type="radio"
                                            className="form-radio h-4 w-4 text-orange-500"
                                            value={option.name}
                                            checked={group === option.name}
                                            onChange={() => setGroup(option.name)}
                                            />
                                            <span className="ml-2 text-gray-700">{option.name}</span>
                                        </label>
                                        ))}
                                    </div>
                                </div>

                                <p className='text-left'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out
                                    our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your
                                    one stop shop.</p>
                            </div>
                        </div>
                        <div className='mb-10 pb-10'>
                            <div className='mb-10 pb-10'>
                                <img 
                                    src = '/serviceDetails02.png'
                                    className="md:w-[100%] relative z-10"
                                />
                            </div>
                            <div className="mb-10">
                                <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">QUALITY SERVICE IS OUR GUARANTEE</h5>
                                <p className="text-left">We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts. Qualified team Affordable pricing Quick service We offer a wide range of plumbing services catered to both residential and
                                </p>
                                <div className="py-10">
                                   
                                    <ul className='divide-y text-left'>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <p className='text-left'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out
                                    our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your
                                    one stop shop.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
        
    </>
  )
}

export default ServiceDetails