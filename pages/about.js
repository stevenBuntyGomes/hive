import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightLong,
    
} from '@fortawesome/free-solid-svg-icons'
import Clients from '@/components/Service/Clients';
import Subscribe from '@/components/About/Subscribe';

const About = () => {
    const [group, setGroup] = useState('');

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
  return (
      <>
          <Layout>
              
            <div className="relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10 mb-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div className='md:w-[1440px] md:m-auto'>
                        <div className='mt-16 p-10 text-center text-white font-raleway'>
                            <h2 className='uppercase font-bold text-[42px] pb-2'>About Us</h2>
                            <h6 className='uppercase font-bold text-[20px]'>Home -  About Us</h6>
                        </div>
                    </div>
                </div>
            </div>
              
            <div className="w-full max-w-7xl rounded bg-white p-10 lg:px-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-2/5 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <Image src="/about.png" width={400} height = {659} className="md:w-[400px] relative z-10 md:h-[659px]" alt=""/>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 px-10 text-center md:text-left">
                        <div className="mb-10">
                            <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">About us</h4>
                            <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">Plumbing is what we do</h5>
                            <p className="text-base leading-[30px]">We are an award winning plumbing company with over 20 years experience in the
                                business. We provide a wide range of services for both residential and commercial clients.</p>
                            <div className="py-10">
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
                            </div>

                            <p className='text-base leading-[30px]'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one stop shop. No job is too big or too small, we’ve got you covered. In addition to our services, you can check out our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one stop shop.</p>
                        </div>
                      </div>
                  </div>
                  
                   <div className="mt-[85px] mb-10">
                                <h5 className="font-bold uppercase md:text-[20px] mb-5">QUALITY SERVICE IS OUR GUARANTEE</h5>
                                <p className="">We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts
                                </p>
                                <div className="py-5">
                                    <ul className='divide-y text-left'>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Quisque aliquet nibh sit amet lectus auctor</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Nulla at metus ultricies, placerat augue sed</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Curabitur mollis ex vestibulum, ullamcorper.</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Nulla at metus ultricies, placerat augue sed.</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-2">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>Curabitur mollis ex vestibulum, ullamcorper.</p>

                                            </div>
                                        </li>
                                    </ul>
                                </div>

                      <p className='text-base mt-[20px] mb-[80px]'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one stop shop. No job is too big or too small, we’ve got you covered. In addition to our services, you can check out our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one stop shop.</p>
                      

                      <div className="bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[278px] md:px-20 py-10 mb-10"></div>
                      
                      <p className='text-base mt-[60px]'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one stop shop. No job is too big or too small, we’ve got you covered. In addition to our services, you can check out our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one stop shop.</p> 

                  </div>
                  
                  <Clients />
                  <Subscribe/>
            </div>
              
          </Layout>
        
    </>
  )
}

export default About