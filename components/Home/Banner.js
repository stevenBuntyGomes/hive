import React, {useState, Fragment, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import { getBannerAction } from '@/Action/BannerAction';
import { useRouter } from 'next/router';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './banner.module.css';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import { getTopServiceAction } from '@/Action/TopServicesAction';
import { TOP_SERVICE_IMAGE_URL } from '@/config';
import parse from 'html-react-parser';

const BannerComponent = () => {
  const router = useRouter();
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const {banners, banner, loading, error} = useSelector((state) => state.banner);
  const {topServices} = useSelector((state) => state.topService);
  // const size = window.innerWidth >= 960 ? 'xl' : 'md';

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const handleClick = (link) => {
    // router.replace(link);
  }

  const getBannersHandler = async () => {
    await dispatch(getBannerAction());
  } 

  const fetchTopService = async () => {
    dispatch(getTopServiceAction());
  } 

    useEffect(() => {
        getBannersHandler();
        fetchTopService();
        Aos.init({duration: 1000});
    }, [dispatch]);

  return (
    <Fragment>
        <section>
          <div className="bg-[url('/hero_section.png')] bg-no-repeat bg-cover w-full h-[700px] md:px-20 py-10">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  // freeMode={true}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, FreeMode, Pagination]}
                  className="mySwiper"
                >
                  {banners && banners.map((banner, index) => (
                      <SwiperSlide className="py-10">
                        <div data-aos= "fade-up" className="p-4 md:p-0 text-center md:text-left relative">
                            <h5 className="md:text-[32px] text-2xl font-semibold">{banner && banner.heading}</h5>
                            <h3 className="md:text-[70px] text-4xl font-bold pt-[25px]">
                              You Can <span className="text-orange-500">{banner && banner.title}</span>
                            </h3>
                            <div className="md:py-10 pt-[25px] pb-[36px]">
                              <ul className="flex justify-center md:justify-start">
                                <li className="pt-2 md:text-[32px] text-md">{banner && banner.details}</li>
                                {/* <li className='align-middle pt-2 md:text-[32px] text-md mx-2'>
                                  <label className={`inline-flex items-center cursor-pointer md text-orange-500`}>
                                    <input
                                      type="radio"
                                      value="hello"
                                      checked={color === 'hello'}
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
                                      value="world"
                                      checked={color === 'world'}
                                      onChange={handleChange}
                                      className="form-radio h-6 w-6 text-orange-500"
                                    />
                                  </label>
                                </li>
                                <li className="pt-2 md:text-[32px] text-md">CARPENTRY</li> */}
                              </ul>
                            </div>
                            <p className="text-[16px] h-auto md:w-[701px] p-0 md:pr-10">
                              {banner && banner.description.length < 300 ? parse(`${banner && banner.description}`) : parse(`${banner && banner.description.slice(0, 300)}...`)}</p>
                          </div>
                          <div data-aos= "fade-up" className="pt-10 flex justify-center md:justify-start">
                            <button className="bg-gray-800 hover:bg-orange-500 text-white py-[14px] px-[30px] rounded-md mr-4" onClick={handleClick(banner && banner.link_one)}>
                              {banner && banner.button_one}
                            </button>
                            <button className="bg-gray-800 hover:bg-orange-500 text-white px-[30px] py-[14px] rounded-md" onClick={handleClick(banner && banner.link_two)}>
                              {banner && banner.button_two}
                            </button>
                          </div>
                    </SwiperSlide>
                  ))}

                </Swiper>           
          </div>
        
          <div className='mt-20 md:mt-0 grid md:grid-cols-3 grid-cols-1 justify-between items-center transform -translate-y-32  md:px-20 px-5 gap-5'>
              {topServices && topServices.map((service, index) => (
                <div data-aos= "fade-up" className="text-center w-max-[360px] rounded-xl pt-[70px] pb-[70px] bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
                  <img src={`${TOP_SERVICE_IMAGE_URL}${service && service.icon}`} className="w-[111px] h-[108px] m-auto" alt="icon1" />
                  <div className="text-xl font-bold leading-[30px] pt-[22px] pb-[37px] md:px-20 px-5">{service && service.title}</div>
                  <div className="px-5 md:px-12">Le{parse(`${service && service.description}`)}</div>
                </div>
              ))}
              {/* <div data-aos= "fade-up" className="text-center w-max-[360px] rounded-xl pt-[70px] pb-[70px] bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
                <img src="/icon2.png" className="w-[111px] h-[108px] m-auto" alt="icon2" />
                <div className="text-xl font-bold leading-[30px] pt-[22px] pb-[37px] md:px-20 px-5">24/7 EMERGENCY PLUBMUING SERVICE</div>
                <div className="px-5 md:px-12">No matter the time or day are on call to serve you. It is in which roasted parts.</div>
              </div>
              <div data-aos= "fade-up" className="text-center w-max-[360px] rounded-xl pt-[70px] pb-[70px] bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
                <img src="/icon3.png" className="w-[111px] h-[108px] m-auto" alt="icon2" />
                <div className="text-xl font-bold leading-[30px] pt-[22px] pb-[37px] md:px-20 px-5">PLUMBING SUPPLIES AND EQUIPMENT</div>
                <div className="px-5 md:px-12">Need a plunger or a new faucet? We sell a wide range of plumbing supplies for all needs.</div>
              </div> */}
          </div>
        </section>
    </Fragment>
  );
}

export default BannerComponent;