import React, {useState, Fragment, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './banner.module.css';

// import required modules
import { FreeMode, Pagination } from "swiper";

const BannerComponent = () => {
  const [color, setColor] = useState('');
  // const size = window.innerWidth >= 960 ? 'xl' : 'md';

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const handleClick = () => {

  }

  return (
    <Fragment>
      <section>
        
        <div className="bg-[url('/hero_section.png')] bg-no-repeat bg-cover w-full h-[700px] md:px-20 py-10">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                autoplay = {{ delay: 1000 }}
                className="mySwiper"
              >
                <SwiperSlide className="py-10">
                    <div className="p-4 md:p-0 text-center md:text-left relative">
                        <h5 className="md:text-[32px] text-2xl font-semibold">Handyman Expertise</h5>
                        <h3 className="md:text-[70px] text-4xl font-bold pt-[25px]">
                          You Can <span className="text-orange-500">Trust</span>
                        </h3>
                        <div className="md:py-10 pt-[25px] pb-[36px]">
                          <ul className="flex justify-center md:justify-start">
                            <li className="pt-2 md:text-[32px] text-md">PAINTING</li>
                            <li className='align-middle pt-2 md:text-[32px] text-md mx-2'>
                              <label className={`inline-flex items-center cursor-pointer md text-orange-500`}>
                                <input
                                  type="radio"
                                  value="teal"
                                  checked={color === 'teal'}
                                  onChange={handleChange}
                                  className="form-radio h-6 w-6 text-orange-500"
                                />
                              </label>
                            </li>
                            <li className="pt-2 md:text-[32px] text-md">PLUMBING</li>
                            <li className='align-middle pt-2 md:text-[32px] text-md mx-2'>
                              <label className={`inline-flex items-center cursor-pointer md text-orange-500`}>
                                <input
                                  type="radio"
                                  value="bunty"
                                  checked={color === 'bunty'}
                                  onChange={handleChange}
                                  className="form-radio h-6 w-6 text-orange-500"
                                />
                              </label>
                            </li>
                            <li className="pt-2 md:text-[32px] text-md">CARPENTRY</li>
                          </ul>
                        </div>
                        <p className="text-[16px] h-auto md:w-[701px] p-0 md:pr-10">Lorem Ipsum is simply dummy text of the printing and
                          typesetting
                          industry. Lorem Ipsum has
                          been the industry's
                          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                          scrambled it to make
                          a type specimen book.</p>
                      </div>
                      <div className="pt-10 flex justify-center md:justify-start">
                        <button className="bg-gray-800 text-white py-[14px] px-[30px] rounded-md mr-4" onClick={handleClick}>
                          GET MORE
                        </button>
                        <button className="bg-orange-500 text-white px-[30px] py-[14px] rounded-md" onClick={handleClick}>
                          GET A QUOTE
                        </button>
                      </div>
                </SwiperSlide>
                <SwiperSlide className="py-10">
                    <div className="p-4 md:p-0 text-center md:text-left">
                        <h5 className="md:text-[32px] text-2xl font-semibold">Handyman Expertise</h5>
                        <h3 className="md:text-[70px] text-4xl font-bold pt-5">
                          You Can <span className="text-orange-500">Trust</span>
                        </h3>
                        <div className="md:py-10 py-5">
                          <ul className="flex justify-center md:justify-start">
                            <li className="pt-2 md:text-[32px] text-md">PAINTING</li>
                            <li className='align-middle pt-2 md:text-[32px] text-md mx-2'>
                              <label className={`inline-flex items-center cursor-pointer md text-orange-500`}>
                                <input
                                  type="radio"
                                  value="teal"
                                  checked={color === 'teal'}
                                  onChange={handleChange}
                                  className="form-radio h-6 w-6 text-orange-500"
                                />
                              </label>
                            </li>
                            <li className="pt-2 md:text-[32px] text-md">PLUMBING</li>
                            <li className='align-middle pt-2 md:text-[32px] text-md mx-2'>
                              <label className={`inline-flex items-center cursor-pointer md text-orange-500`}>
                                <input
                                  type="radio"
                                  value="teal"
                                  checked={color === 'teal'}
                                  onChange={handleChange}
                                  className="form-radio h-6 w-6 text-orange-500"
                                />
                              </label>
                            </li>
                            <li className="pt-2 md:text-[32px] text-md">CARPENTRY</li>
                          </ul>
                        </div>
                        <p className="text-[16px] h-auto md:w-[701px] p-0 md:pr-10">Lorem Ipsum is simply dummy text of the printing and
                          typesetting
                          industry. Lorem Ipsum has
                          been the industry's
                          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                          scrambled it to make
                          a type specimen book.</p>
                      </div>
                      <div className="pt-[42px] flex justify-center md:justify-start">
                        <button className="bg-gray-800 text-white py-2 px-[30px] py-[14px] rounded-md mr-4" onClick={handleClick}>
                          GET MORE
                        </button>
                        <button className="bg-orange-500 text-white py-2 px-[30px] py-[14px] rounded-md" onClick={handleClick}>
                          GET A QUOTE
                        </button>
                      </div>
                </SwiperSlide>
                <SwiperSlide className="py-10">
                    <div className="p-4 md:p-0 text-center md:text-left">
                        <h5 className="md:text-[32px] text-2xl font-semibold">Handyman Expertise</h5>
                        <h3 className="md:text-[70px] text-4xl font-bold pt-5">
                          You Can <span className="text-orange-500">Trust</span>
                        </h3>
                        <div className="md:py-10 py-5">
                          <ul className="flex justify-center md:justify-start">
                            <li className="pt-2 md:text-[32px] text-md">PAINTING</li>
                            <li className='align-middle pt-2 md:text-[32px] text-md mx-2'>
                              <label className={`inline-flex items-center cursor-pointer md text-orange-500`}>
                                <input
                                  type="radio"
                                  value="teal"
                                  checked={color === 'teal'}
                                  onChange={handleChange}
                                  className="form-radio h-6 w-6 text-orange-500"
                                />
                              </label>
                            </li>
                            <li className="pt-2 md:text-[32px] text-md">PLUMBING</li>
                            <li className='align-middle pt-2 md:text-[32px] text-md mx-2'>
                              <label className={`inline-flex items-center cursor-pointer md text-orange-500`}>
                                <input
                                  type="radio"
                                  value="teal"
                                  checked={color === 'teal'}
                                  onChange={handleChange}
                                  className="form-radio h-6 w-6 text-orange-500"
                                />
                              </label>
                            </li>
                            <li className="pt-2 md:text-[32px] text-md">CARPENTRY</li>
                          </ul>
                        </div>
                        <p className="text-[16px] h-auto md:w-[701px] p-5 md:pr-10">Lorem Ipsum is simply dummy text of the printing and
                          typesetting
                          industry. Lorem Ipsum has
                          been the industry's
                          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                          scrambled it to make
                          a type specimen book.</p>
                      </div>
                      <div className="pt-10 flex justify-center md:justify-start">
                        <button className="bg-gray-800 text-white py-2 px-5 rounded-md mr-4" onClick={handleClick}>
                          Get More
                        </button>
                        <button className="bg-orange-500 text-white py-2 px-5 rounded-md" onClick={handleClick}>
                          Get a Quote
                        </button>
                      </div>
                </SwiperSlide>
              </Swiper>           
        </div>
       
        <div className='mt-10 md:mt-0 grid md:grid-cols-3 grid-cols-1 justify-between items-center transform -translate-y-32  md:px-20 px-10 gap-5'>
            <div className="text-center w-max-[360px] rounded-xl pt-[70px] pb-[70px] bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
              <img src="/icon1.png" className="w-[111px] h-[108px] m-auto" alt="icon1" />
              <div className="text-xl font-bold leading-[30px] pt-[22px] pb-[37px] md:px-20">GENERAL PLUMBING MAINTAINANCE</div>
              <div className="px-5 md:px-12">Leaky faucet? Clogged toilet? We got you covered with of plumbing maintenance services.</div>
            </div>
            <div className="text-center w-max-[360px] rounded-xl pt-[70px] pb-[70px] bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
              <img src="/icon2.png" className="w-[111px] h-[108px] m-auto" alt="icon2" />
              <div className="text-xl font-bold leading-[30px] pt-[22px] pb-[37px] md:px-20">24/7 EMERGENCY PLUBMUING SERVICE</div>
              <div className="px-5 md:px-12">No matter the time or day are on call to serve you. It is a paradisematic country, in which roasted parts.</div>
            </div>
            <div className="text-center w-max-[360px] rounded-xl pt-[70px] pb-[70px] bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
              <img src="/icon3.png" className="w-[111px] h-[108px] m-auto" alt="icon2" />
              <div className="text-xl font-bold leading-[30px] pt-[22px] pb-[37px] md:px-20">PLUMBING SUPPLIES AND EQUIPMENT</div>
              <div className="px-5 md:px-12">Need a plunger or a new faucet? We sell a wide range of plumbing supplies for all needs.</div>
            </div>
        </div>
      </section>
    </Fragment>
  );
}

export default BannerComponent;