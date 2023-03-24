import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCss from './service.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useRouter } from "next/router";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

const Service = () => {
    const Router = useRouter();

    const onClick = () => {
        Router.replace('/details/service_details');
    }

    const contents = [
        {
            img: 'https://i.ibb.co/QNv7649/image1.png',
            title: 'Plumbing Design',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            img: 'https://i.ibb.co/b5TyhtP/image2.png',
            title: 'Water Heating & Cooling',
            desc: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
        },
        {
            img: 'https://i.ibb.co/DCNWhXw/image3.png',
            title: 'Toilet Installation & Repair',
            desc: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.'
        },
        {
            img: 'https://i.ibb.co/QNv7649/image1.png',
            title: 'Plumbing Design',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            img: 'https://i.ibb.co/b5TyhtP/image2.png',
            title: 'Water Heating & Cooling',
            desc: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
        },
        {
            img: 'https://i.ibb.co/DCNWhXw/image3.png',
            title: 'Toilet Installation & Repair',
            desc: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.'
        },
    ]

  return (
    <>
    <main className="bg-slate-50 p-10">
        <div className="text-center">
            <h2 className="text-orange-500 uppercase font-bold md:text-[32px] leading-[36px] text-2xl pb-3">Our Services</h2>
            <h2 className="font-bold uppercase md:text-[42px] text-4xl leading-[50px] mb-5">Quality Service is Our Guarantee</h2>
            <div className="flex justify-center items-center">
                <p className="max-w-[830px] text-base leading-[30px] mb-[40px]">We offer a wide range of plumbing services catered to
                    both
                    residential and commercial
                    clients. Even the
                    all-powerful Pointing has no control about the blind texts.</p>
            </div>

        </div>
              
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            Autoplay = {{ delay: 1000 }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                576: {
                    // width: 576,
                    slidesPerView: 1,
                },
                768: {
                    // width: 768,
                    slidesPerView: 3,
                },
            }}
            // modules={[FreeMode, Pagination]}
            className={`mySwiper`}
              >
                  
            {contents && contents.map((content, index) => (
                <SwiperSlide className="py-10" key = {index}>
                    <div className="shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] text-center md:w-[370px] rounded-md grid grid-cols-1">
                        <img src={content.img} className="w-full h-[250px] rounded-md mb-[38px]" />
                        <div className="text-xl font-bold leading-[24px] mb-[20px]">
                            {content.title}
                        </div>
                        <div className="w-[152px] h-[3px] bg-orange-500 text-center items-center m-auto"></div>
                        <div className="text-base leading-[30px] p-8">
                            {content.desc}
                        </div>
                        <div className="mb-[38px]">
                            <button onClick={onClick} className="bg-black hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                                Show More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>
    </main>
    </>
  );
}

export default Service;

