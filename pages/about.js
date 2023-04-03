import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightLong,
    
} from '@fortawesome/free-solid-svg-icons'
import Clients from '@/components/Service/Clients';
import Subscribe from '@/components/About/Subscribe';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import {ABOUT_IMAGE_URL} from '../config'
import {getAboutAction} from '../Action/AboutAction'
import { getSettingsAction } from "@/Action/SettingsAction";


const About = () => {

    const dispatch = useDispatch();
    const {about, loading} = useSelector((state) => state.about);
    const [group, setGroup] = useState('');

    const getSettingsHandler = async () => {
        dispatch(getSettingsAction())
    }

    const options = [
        {
            name: 'Battery too low',
        },
        {
            name: 'Picture uploaded',
        },
        {
            name: 'Battery too low',
        },
        {
            name: 'Friend request',
        },
        {
            name: 'Battery too low',
        },
        {
            name: 'Picture uploaded',
        },
    ];


    const onClick =() => {

    }

    const getAboutDispatchHandler = async () => {
        dispatch(getAboutAction());
    }


    useEffect(() => {
        getAboutDispatchHandler();
        getSettingsHandler();
        Aos.init({duration: 1000});
    }, [dispatch]);
  return (
      <>
          <Layout>
              
            <div className="relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10 mb-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div data-aos = "fade-up" className='md:max-w-[1440px] md:m-auto'>
                        <div className='mt-16 p-10 text-center text-white'>
                            <h2 className='uppercase font-bold text-[42px] pb-2'>About Us</h2>
                            <h6 className='uppercase font-bold text-[20px]'>Home -  About Us</h6>
                        </div>
                    </div>
                </div>
              </div>
              
              <div className='bg-[#F5F5F5] container-full mx-auto'>
                  <div className="w-full rounded bg-white p-10 md:px-20 text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                    <div data-aos = "fade-up" className="w-full md:w-2/5 md:px-10 px-5 mb-10 md:mb-0">
                        <div className="relative">
                            <img src={`${ABOUT_IMAGE_URL}${about && about?.left_image}`} width={400} height = {659} className="md:w-[400px] relative z-10 md:h-[659px]" alt=""/>
                        </div>
                    </div>
                    <div data-aos = "fade-up" className="w-full md:w-3/5 md:px-10 px-5 text-center md:text-left">
                        <div className="mb-10">
                            <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">{about && about?.heading}</h4>
                            <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">{about && about?.title}</h5>
                            <p className="text-base leading-[30px] text-left">{about && about?.description}</p>
                            {/* <div className="py-10">
                                <div className="grid grid-cols-2">
                                    {options.map((option, index) => (
                                    <label className="inline-flex items-center" key={index}>
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

                            {/* <p className='text-base leading-[30px] text-left'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one stop shop. No job is too big or too small, we’ve got you covered. In addition to our services, you can check out our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one stop shop.</p> */}
                        </div>
                      </div>
                  </div>
                  
                   <div data-aos = "fade-up" className="mt-[85px] mb-10">
                                <h5 className="font-bold uppercase md:text-[20px] mb-5">{about && about?.first_heading}</h5>
                                <p className="pb-10">{about && about?.first_description}
                                </p>
                                {/* <div className="py-5">
                                    <ul className='divide-y text-left'>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Quisque aliquet nibh sit amet lectus auctor</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Nulla at metus ultricies, placerat augue sed</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Curabitur mollis ex vestibulum, ullamcorper.</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Nulla at metus ultricies, placerat augue sed.</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Curabitur mollis ex vestibulum, ullamcorper.</p>

                                            </div>
                                        </li>
                                    </ul>
                                </div> */}

                     
                      

                      <div data-aos = "fade-up" style={{ backgroundImage: `url(${ABOUT_IMAGE_URL}${about && about?.first_image})`}}  className={`bg-no-repeat bg-cover w-full h-[278px] md:px-20 py-10 mb-10`}></div>
                      
                      <p data-aos = "fade-up" className='text-base mt-[60px]'>{about && about.second_description}</p> 

                    </div>

                    <div data-aos = "fade-up" className="mt-[85px] mb-10">
                                <h5 className="font-bold uppercase md:text-[20px] mb-5">{about && about?.second_heading}</h5>
                                <p className="pb-10">{about && about?.second_description}
                                </p>
                                {/* <div className="py-5">
                                    <ul className='divide-y text-left'>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Quisque aliquet nibh sit amet lectus auctor</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Nulla at metus ultricies, placerat augue sed</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Curabitur mollis ex vestibulum, ullamcorper.</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Nulla at metus ultricies, placerat augue sed.</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black  ">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Curabitur mollis ex vestibulum, ullamcorper.</p>

                                            </div>
                                        </li>
                                    </ul>
                                </div> */}

                      
                      

                      <div data-aos = "fade-up" style={{ backgroundImage: `url(${ABOUT_IMAGE_URL}${about && about?.second_image})`}}  className={`bg-no-repeat bg-cover w-full h-[278px] md:px-20 py-10 mb-10`}></div>
                      
                      <p data-aos = "fade-up" className='text-base mt-[60px]'>{about && about.second_description}</p> 

                    </div>
                      
                </div>
              </div>
                  
                  <Clients />
                  <Subscribe/>
     
              
            
              
          </Layout>
        
    </>
  )
}

export default About