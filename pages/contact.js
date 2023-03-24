import React, {useState} from 'react'
import Layout from '@/components/Layout';
import Clients from '@/components/Service/Clients';
import Subscribe from '@/components/About/Subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleMap } from "@react-google-maps/api";
import {
    faLocationDot,
    faPhoneFlip,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const containerStyle = {
        width: "100%",
        height: "661px",
    };

    const center = {
        lat: 37.7749,
        lng: -122.4194,
    };

    const zoom = 10;

  return (
      <>
        <Layout> 
            <div className="font-raleway relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10 mb-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div className='md:w-[1440px] md:m-auto'>
                        <div className='mt-16 p-10 text-center text-white font-raleway'>
                            <h2 className='uppercase font-bold text-[42px] pb-2'>Contact US</h2>
                            <h6 className='uppercase font-bold text-[20px]'>Home -  Contact US</h6>
                        </div>
                    </div>
                </div>
              </div>

              <div className='justify-between items-center rounded-xl transform -translate-y-32 shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)] mx-10 md:mx-[90px] gap-5'>
                  <div className="text-center w-max-[360px] py-5 bg-white rounded-xl">
                     <h2 className="text-[32px] font-bold text-center pt-[44px] leading-[36px] pb-[56px]">
                        CONTACT US
                    </h2>
                </div>
                <div className = "mx-[15%] text-center">
                    <div className='md:flex pb-[60px]'>
                        <div className = "md:flex px-5 md:px-[37px] md:border-r-2 border-orange-500 py-[16px]">
                            <FontAwesomeIcon icon = {faLocationDot} className='pb-[10px] md:pb-0 pt-[8px] text-[35px] text-orange-500 px-[14px]'/>
                            <div className='text-black'>
                                <p>14 Tottenham Court Road</p>
                                <p>Bulls Stadium, Califorina</p>
                            </div>
                        </div>
                        <div className = "md:flex px-5 md:px-[37px] md:border-r-2 border-orange-500 py-[16px]">
                            <FontAwesomeIcon icon = {faPhoneFlip} className='pb-[10px] md:pt-[8px] md:pb-0 text-[35px] text-orange-500 px-[14px]'/>
                            <div className='text-black'>
                                <p>14 Tottenham Court Road</p>
                                <p>Bulls Stadium, Califorina</p>
                            </div>
                        </div>
                        <div className = "md:flex px-5 md:px-[37px] py-[16px]">
                            <FontAwesomeIcon icon = {faEnvelope} className='pb-[10px] md:pb-0 pt-[8px] text-[35px] text-orange-500 px-[14px]'/>
                            <div className='text-black'>
                                <p>14 Tottenham Court Road</p>
                                <p>Bulls Stadium, Califorina</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
              
            <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center transform -translate-y-32  md:px-20 px-10 gap-5 mt-[100px]'>
                    <div className='bg-[url("/contactWorkImage.png")] bg-no-repeat bg-cover max-w-[935px] max-h-[959px] md:w-[935px] md:h-[959px]'>

                    </div>
                  <div className="text-center w-max-[360px] rounded-xl py-5 bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
                      
                     <section className="text-gray-700 body-font relative">
                        <div className="container pl-[52px] pr-[52px] pr-[30px] pt-[54px] pb-[54px] mx-auto">
                        <div className="text-center md:text-left flex flex-col w-full">
                            <h1 className="text-center md:text-left text-base font-medium text-left leading-[18px] pb-[12px]">
                                QUICK SUPPORT
                            </h1>
                            <h2 className="text-[32px] font-bold text-center md:text-left leading-[36px] pb-[56px]">
                                SEND US A MESSAGE
                            </h2>
                        </div>
                         <div className="flex flex-wrap -m-2">
                                <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder='First Name'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>
                                  
                                  <div className="pb-[28px] w-full md:w-1/2">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder='Last Name'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>

                                   <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                    <div className="relative">
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder='Phone Number'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                </div>
                                  
                                   <div className="pb-[28px] w-full md:w-1/2">
                                    <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Your Email'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    </div>
                                  </div>

                                  
                                

                                <div className="pb-[31px] w-full">
                                    <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Message'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                    </div>
                                </div>
                                <div className="pb-[4px] w-full">
                                    <button className="py-2 px-5 md:px-[185px] md:py-[20px] font-bold bg-orange-500 text-white rounded-md">
                                        SEND US A MESSAGTE
                                    </button>
                                </div>   
                            </div>
                        </div>
                    </section>
                       
                </div>
                
            </div> 

            {/* <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
            ></GoogleMap> */}

            <div className='bg-[url("/Map.png")] w-full md:max-w-full h-[400px] md:h-[661px] bg-no-repeat bg-cover'>
                
            </div>

            <Clients />
            <Subscribe />
 
        </Layout>
    </>
  )
}

export default Contact