import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Autoplay, FreeMode, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/autoplay';


const Clients = () => {
    const onClick = () => {

    }
    const contents = [
        {
            img: '/1.png'
        },
        {
            img: '/2.png'
        },
        {
            img: '/3.png'
        },
        {
            img: '/4.png'
        },
        {
            img: '/3.png'
        },
        {
            img: '/2.png'
        },
        {
            img: '/1.png'
        },
        {
            img: '/4.png'
        },
        {
            img: '/2.png'
        },
        {
            img: '/1.png'
        },
        {
            img: '/5.png'
        },
        {
            img: '/6.png'
        },
    ];
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <>
        <main className='bg-[#F9F8F9] container-full mx-auto'>
            <div className='md:p-20 p-10'>
                <div data-aos = "fade-up" className="text-center">
                    <h2 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl">Our BIG CLINTS</h2>
                    <h1 className="font-bold uppercase md:text-[42px] text-4xl py-5">WE WORK WITH</h1>
                    <p className="">We offer a wide range of plumbing services catered to both residential and commercial clients.
                        Even
                        the all-powerful Pointing has no control about the blind texts.</p>
                </div>
                <Swiper
                slidesPerView={7}
                spaceBetween={30}
                loop={true}     
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay, FreeMode, Pagination]}
                breakpoints={{
                0: {
                    slidesPerView: 3,
                },
                576: {
                    // width: 576,
                    slidesPerView: 5,
                },
                768: {
                    // width: 768,
                    slidesPerView: 7,
                },
            }}
                // modules={[FreeMode, Pagination]}
                // className="mySwiper"
            >
                {contents && contents.map((content, index) => (
                    <SwiperSlide className="py-10" key = {index}>
                        <img data-aos = "fade-up" src={content.img} alt = "image content"/>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            </div>
        </main>
    </>
  )
}

export default Clients