import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const Testimonial = () => {
    const onClick = () => {

    }
    const contents = [
            {
                img: 'https://tecdn.b-cdn.net/img/new/avatars/2.webp',
                name: 'Neil Sims',
                des: 'Founder & CEO',
                review: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
            },
            {
                img: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
                name: 'John Doe',
                des: 'Founder & CEO',
                review: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
            },
            {
                img: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
                name: 'Smith',
                des: 'Founder & CEO',
                review: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
            },
            {
                img: 'https://tecdn.b-cdn.net/img/new/avatars/4.webp',
                name: 'Neilson',
                des: 'Founder & CEO',
                review: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
            },
            {
                img: 'https://tecdn.b-cdn.net/img/new/avatars/3.webp',
                name: 'Simson',
                des: 'Founder & CEO',
                review: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
            },
            {
                img: 'https://tecdn.b-cdn.net/img/new/avatars/6.webp',
                name: 'Fisherman',
                des: 'Founder & CEO',
                review: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
            },
        ]
  return (
    <>
        <main className='bg-slate-50 p-10'>
            <div className="text-center">
                <h5 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl">OUR TESTIMONIALS</h5>
                <h4 className="font-bold uppercase md:text-[42px] text-4xl py-5">WHAT IS OUR CLIENTS SAY?</h4>
                <p className="">We offer a wide range of plumbing services catered to both residential and commercial clients. Even
                    the all-powerful Pointing has no control about the blind texts.</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay = {{ delay: 1000 }}
                // modules={[FreeMode, Pagination]}
                className="mySwiper"
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
            >
                {contents && contents.map((content, index) => (
                    <SwiperSlide className="py-10" key = {index}>
                        <div className="shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] border-2 border-orange-500 md:w-[370px] rounded-xl rounded-md">
                            <div className="p-4 flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-16 h-16 rounded-full" src={content.img} alt="Neil image"/>
                                </div>
                                <div className="flex-1 min-w-0 mt-5">
                                    <p className="text-sm font-medium text-gray-900 truncate ">
                                        { content.name }
                                    </p>
                                    <p className="text-sm text-gray-500 truncate ">
                                        { content.des }
                                    </p>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <title>First star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <title>Second star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <title>Third star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <title>Fourth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <title>Fifth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                            <div className = 'p-4'>
                                {content.review}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </main>
    </>
  )
}

export default Testimonial