import React, {useState} from 'react'
import Layout from '@/components/Layout';
import Clients from '@/components/Service/Clients';
import Subscribe from '@/components/About/Subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const Inquiry = () => {

  return (
      <>
        <Layout> 
            <div className="relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10 mb-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div className='md:w-[1440px] md:m-auto'>
                        <div className='mt-16 p-10 text-center text-white font-raleway'>
                            <h2 className='uppercase font-bold text-[42px] pb-2'>Inquiry</h2>
                            <h6 className='uppercase font-bold text-[20px]'>Home -  Inquiry</h6>
                        </div>
                    </div>
                </div>
              </div>
              
              <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center transform -translate-y-32  md:px-20 px-10 gap-5'>
                  <div className="mb-5 md:mb-0 text-center w-max-[360px] py-5 bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
                      
                     <section className="text-gray-700 body-font relative">
                        <div className="container pl-[52px] pr-[52px] pr-[30px] pt-[54px] pb-[54px] mx-auto">
                        <div className="text-center md:text-left flex flex-col w-full">
                            <h1 className="text-center md:text-left text-base font-medium text-left leading-[18px] pb-[12px]">
                                FREE CONSULTATION
                            </h1>
                            <h2 className="text-[32px] font-bold text-left leading-[36px] pb-[56px]">
                                GET A FREE INQUERY
                            </h2>
                        </div>
                         <div className="flex flex-wrap -m-2">
                                <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Full Name'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                </div>
                                <div className="pb-[28px] w-full md:w-1/2">
                                    <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Email'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>

                                   <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                    <div className="relative">
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder='Phone Number'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                </div>
                                <div className="pb-[28px] w-full md:w-1/2">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder='Address'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>

                                  <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="service"
                                        placeholder='Your Service'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>

                                  <div className="pb-[28px] w-full md:w-1/2">
                                    <div className="relative">
                                    <input
                                        type="number"
                                        name="budget"
                                        placeholder='Your Budget'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>
                                  

                                <div className="pb-[31px] w-full">
                                    <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Message'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-3 px-5 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                    </div>
                                </div>
                                <div className="pb-[4px] w-full">
                                    <button className="py-2 px-5 md:px-[185px] md:py-[20px] font-bold bg-orange-500 text-white rounded-md">
                                        GET A FREE INQUERY
                                    </button>
                                </div>   
                            </div>
                        </div>
                    </section>
                       
                </div>
                <div className='bg-[url("/inquery01.png")] w-full bg-no-repeat bg-cover w-full w-max-[360px] md:ml-[-20px]'>
                    <div className='mt-[351px] mb-[51px] ml-[60px]'>
                        <h3 className="md:text-[70px] text-4xl font-bold pt-5 text-orange-500 mb-[26px]">
                            LETS
                        </h3>
                        <h3 className="md:text-[70px] text-4xl font-bold pt-5 text-white mb-[26px]">
                            CONNECT
                        </h3>
                        <h3 className="md:text-[70px] text-4xl font-bold pt-5 text-orange-500 mb-[46px]">
                            TOGETHER
                        </h3>
                        <div className="p-2 w-full">
                            <button className="font-raleway font-bold bg-transparent text-white py-2 px-5 rounded-md border-2 border-white">
                                CONTACT US <FontAwesomeIcon icon = {faChevronRight}/><FontAwesomeIcon className='ml-[-2px]' icon = {faChevronRight}/>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            
              <Clients />
              <Subscribe />
           
        </Layout>
    </>
  )
}

export default Inquiry