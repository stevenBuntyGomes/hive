import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Autoplay, FreeMode, Pagination } from "swiper";
import { useDispatch, useSelector } from 'react-redux';
import { getPriceAction } from '@/Action/PriceAction';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import parse from 'html-react-parser';
import Link from 'next/link';

export const ServicePrice = () => {
    const dispatch = useDispatch();
    const {prices, loading, error} = useSelector((state) => state.price);
    const Router = useRouter();

    const onServicePriceClick = (price) => {
        Router.push({
            pathname: '/details/price_details',
            query: { price: price.id }
        })
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

            const getPricesHandler = () => {
                dispatch(getPriceAction());
            }

            useEffect(() => {
                getPricesHandler();
                Aos.init({duration: 1000});
            }, []);
  return (
    <>
        <main className='w-full rounded bg-[#F9F8F9] md:p-10 p-5 md:px-20'>
            <div data-aos = "fade-up" className="text-center">
                <h2 className="text-orange-500 uppercase font-bold md:text-[32px] leading-[36px] text-2xl pb-3">Our Services PRICES</h2>
                <h2 className="font-bold uppercase md:text-[42px] text-4xl leading-[50px] mb-[40px]">Quality Service WITH STANDARD PRICES</h2>
                <div className="flex justify-center items-center">
                    <p className="max-w-[830px] text-base leading-[30px] mb-[40px]">We offer a wide range of plumbing services catered to both residential and
                        commercial clients. Even the
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
            className="mySwiper"
        >
            {prices && prices.map((price, index) => (
                <SwiperSlide className="py-10" key = {index}>
                    <div data-aos = "fade-up" className={`shadow-[0_0_15px_2px_rgba(0,0,0,0.4)] ${index % 2 === 0 ? 'border-orange-500' : 'border-black'} text-center md:max-w-[430px] rounded-xl grid grid-cols-1 border-2 bg-white`}>
                        <div className={`rounded-xl ${index % 2 === 0 ? 'bg-orange-500' : 'bg-black'} text-white p-10`}>
                            <h1 className="uppercase font-bold text-[32px]">{price && price.title}</h1>
                        </div>
                        <div className="p-8 mb-[38]">
                            {parse(`${price && price.description}`)}
                        </div>
                        <div className={`text-[42px] mb-[38px] sans-serif font-bold ${index % 2 === 0 ? 'text-black' : 'text-orange-500'} `}>
                            €{price && price.price}
                        </div>
                        <div className='mb-[36px]'>excl vat</div>
                        <div className="mb-[48px]">
                            <Link href = {`/details/prize/${price && price.id}`} className="bg-black hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                                Show More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>
        </main>
    </>
  )
}
