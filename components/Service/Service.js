import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCss from './service.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { SERVICE_IMAGE_URL } from "@/config";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getServiceAction } from "@/Action/ServiceAction";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const Service = () => {
    const Router = useRouter();
    const dispatch = useDispatch();
    const {services, loading, error} = useSelector((state) => state.service);

    const onClick = (service) => {
        Router.push({
            pathname: '/details/service_details',
            query: { service: service.id }
        })
    }

    const getServiceHandler = async () => {
        await dispatch(getServiceAction());
    }

    useEffect(() => {
        getServiceHandler();
        Aos.init({duration: 1000});
    }, [dispatch]);

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
    <main data-aos= "fade-up" className="bg-[#F9F8F9] w-full rounded md:p-10 p-5 md:px-20">
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
            loop={true}        
            autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            }}
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
            modules={[Autoplay, FreeMode, Pagination]}
            // modules={[FreeMode, Pagination]}
            className={`mySwiper`}
              >
                  
            {services && services.map((service, index) => (
                <SwiperSlide className="py-10" key = {index}>
                    <div data-aos= "fade-up" className="shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] text-center md:max-w-[420px] rounded-md grid grid-cols-1">
                        <img src={`${SERVICE_IMAGE_URL}${service && service.image}`} alt = {service && service.image} className="w-full h-[226px] md:h-[270px] rounded-md mb-[38px]" />
                        <div className="text-xl font-bold leading-[24px] mb-[20px]">
                            {service && service.title}
                        </div>
                        <div className="w-[152px] h-[3px] bg-orange-500 text-center items-center m-auto"></div>
                        <div className="text-base leading-[30px] p-8">
                            {service && service.description}
                        </div>
                        <div className="mb-[38px]">
                            <button onClick={() => onClick(service)} className="bg-black hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
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

