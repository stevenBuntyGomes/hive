import React, {useState} from 'react'
import Layout from '@/components/Layout';
import Clients from '@/components/Service/Clients';
import Subscribe from '@/components/About/Subscribe';

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
                  <div className="text-center w-max-[360px] rounded-xl py-5 bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
                      
                     <section className="text-gray-700 body-font relative">
                        <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="text-base font-medium text-left leading-[18px]">
                                Free Consultation
                            </h1>
                            <h2 className="text-[32px] font-bold text-left leading-[36px]">
                                Get a Free Inquiry
                            </h2>
                        </div>
                         <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Full Name'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Email'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>

                                   <div className="p-2 w-1/2">
                                    <div className="relative">
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder='Phone Number'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder='Address'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>

                                  <div className="p-2 w-1/2">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="service"
                                        placeholder='Your Service'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>

                                  <div className="p-2 w-1/2">
                                    <div className="relative">
                                    <input
                                        type="number"
                                        name="budget"
                                        placeholder='Your Budget'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>
                                  

                                <div className="p-2 w-full">
                                    <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Message'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="bg-orange-500 text-white py-2 px-5 rounded-md">
                                        Get a Free Inquiry
                                    </button>
                                </div>   
                            </div>
                        </div>
                    </section>
                       
                </div>
              </div>
            
              <Clients />
              <Subscribe />
           
        </Layout>
    </>
  )
}

export default Inquiry