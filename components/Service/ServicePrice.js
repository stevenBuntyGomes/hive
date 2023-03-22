import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const ServicePrice = () => {

    const onClick = () => {

    }

    const contents = [
                {
                    rate: 'flat rate 1',
                    price: '199',
                    desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
                },
                {
                    rate: 'flat rate 2',
                    price: '189',
                    desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
                },
                {
                    rate: 'flat rate 3',
                    price: '200',
                    desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
                },
                {
                    rate: 'flat rate 4',
                    price: '199',
                    desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
                },
                {
                    rate: 'flat rate 5',
                    price: '189',
                    desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
                },
                {
                    rate: 'flat rate 6',
                    price: '200',
                    desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
                }
            ];
  return (
    <>
        <main className='bg-slate-50 p-10'>
            <div class="text-center">
                <h2 class="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">Our Services PRICES</h2>
                <h2 class="font-bold uppercase md:text-[42px] text-4xl mb-5">Quality Service WITH STANDARD PRICES</h2>
                <div class="flex justify-center items-center">
                    <p className="max-w-[830px]">We offer a wide range of plumbing services catered to both residential and
                        commercial clients. Even the
                        all-powerful Pointing has no control about the blind texts.</p>
                </div>
            </div>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            autoplay = {{ delay: 1000 }}
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
            className="mySwiper"
        >
            {contents && contents.map((content, index) => (
                <SwiperSlide className="py-10">
                    <div className={`${index % 2 === 0 ? 'border-orange-500' : 'border-black'} text-center md:w-[370px] rounded-md rounded-xl grid grid-cols-1 border-2 bg-white`}>
                        <div className={`rounded-t-xl ${index % 2 === 0 ? 'bg-orange-500' : 'bg-black'} text-white p-10`}>
                            <h1 class="uppercase font-bold text-[32px]">{content.rate}</h1>
                        </div>
                        <div className="p-4">
                            {content.desc}
                        </div>
                        <div className={`text-[42px] font-bold ${index % 2 === 0 ? 'text-orange-500' : 'text-black'} `}>
                            €{content.price }
                        </div>
                        <div className='mb-2'>excl vat</div>
                        <div className="mb-5">
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
  )
}
