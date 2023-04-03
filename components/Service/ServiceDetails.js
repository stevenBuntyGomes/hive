import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightLong
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { withRouter, useRouter } from 'next/router'
import { getSingleServiceAction } from '@/Action/ServiceAction';
import { useDispatch, useSelector } from 'react-redux';
import { SERVICE_IMAGE_URL } from '@/config';

const ServiceDetails = ({serviceId}) => {
    const Router = useRouter();
    const dispatch = useDispatch();
    const {service, loading, error} = useSelector((state) => state.service);
    const [group, setGroup] = useState('');

    const onClick = (service) => {
        Router.push({
            pathname: '/details/service_details',
            query: { service: service.id }
        })
    }

    const getSingleServiceHandler = () => {
        dispatch(getSingleServiceAction(serviceId));
    }

    useEffect(() => {
        getSingleServiceHandler();
        Aos.init({duration: 1000});
    }, [dispatch]);

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
            <div className="relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div data-aos = "fade-up" className='md:max-w-[1440px] md:m-auto'>
                        <div className='mt-16 md:p-10 p-5 text-center text-white  '>
                            <h2 className='font-bold text-[42px] pb-2'>SERVICE DETAILS</h2>
                            <h6 className='font-bold text-[20px]'>HOME-SERVICES-SERVICE DETAILS</h6>
                        </div>
                    </div>
                </div>
              </div>
              
            <div className='bg-slate-50 p-5 md:px-20 container-full mx-auto'>
                <div className='md:flex '>
                    <div className='w-full md:max-w-[30%] md:pr-5 mb-10 md:mb-0 text-center md:text-left'>
                        <div className="my-10">

                            <div>
                                <div data-aos = "fade-up" className="md:p-10 p-5 my-2 md:max-w-[350px] shadow-[0_0_15px_2px_rgba(0,0,0,0.3)]">
                                    <ul className="divide-y">
                                        <li className="hover:bg-gray-100 hover:bg-opacity-20">
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
                                <div data-aos = "fade-up" className="my-2 md:max-w-[350px] shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] md:p-10 p-5">
                                    <ul className="divide-y">
                                        <li className="border-0 hover:bg-gray-100 hover:bg-opacity-20">
                                            <p className=" font-bold mx-4 py-4 text-[20px] mb-2">
                                               GET FREE ESTIMATE
                                            </p>
                                        </li>
                                        <div className="w-[152px] h-[3px] bg-orange-500 mx-auto md:mx-0 md:ml-[15px]"></div>
                                        <li className="border-none hover:bg-gray-100 hover:bg-opacity-20">
                                            <h3 className="sans-serif font-bold mx-4 py-4 text-xl md:text-2xl mb-2">
                                               123-456-78910
                                            </h3>
                                        </li>
                                        <li className="border-none hover:bg-gray-100 hover:bg-opacity-20">
                                            <p className="  mx-4 py-4 text-base mb-2">
                                               Our online scheduling and payment system is safe
                                            </p>
                                        </li>
                                        <div className="mb-5 text-center">
                                            <button onClick={() => onClick} className="bg-black hover:bg-orange-500 text-white font-base text-lg py-2 px-4 rounded">
                                                REQUEST WITH ONLINE FORM
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                          </div>
                          
                        <div className='my-10'>
                            <div>
                                <div data-aos = "fade-up" className="md:p-10 p-5 my-2 md:max-w-[350px] shadow-[0_0_15px_2px_rgba(0,0,0,0.3)]">
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
                      
                    <div className='w-full md:max-w-[70%] pr-0 pl-0 md:pl-5 md:mb-0 md:pr-0 md:pb-10 pt-10 text-center md:text-left'>
                        <div data-aos = "fade-up" className='md:mb-10 mb-5 md:pb-10 pb-5'>
                            <div className='md:mb-10 md:pb-10'>
                                <img 
                                    src = {`${SERVICE_IMAGE_URL}${service && service.first_image}`}
                                    className="md:w-[100%] relative z-10"
                                />
                            </div>
                            <div className="mb-10">
                                <h5 className="font-bold uppercase md:text-[42px] mt-10 md:mt-0 text-4xl mb-5">{service && service.first_heading}</h5>
                                <p className="text-left">
                                    {service && service.first_description}
                                </p>
                                {/* <div className="py-10">
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
                                </div> */}
                            </div>
                        </div>
                        <div data-aos = "fade-up" className='mb-10 pb-10'>
                            <div className='mb-10 pb-10'>
                                <img 
                                    src = {`${SERVICE_IMAGE_URL}${service && service.second_image}`}
                                    className="md:w-[100%] relative z-10"
                                />
                            </div>
                            <div className="mb-10">
                                <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">{service && service.second_heading}</h5>
                                <p className="text-left">
                                    {service && service.second_description}
                                </p>
                                {/* <div className="py-10">
                                   
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
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
        
    </>
  )
}

export default withRouter(ServiceDetails)