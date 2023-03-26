import React, {useSta, useEffect} from "react";
import {useRouter} from "next/router";
import Aos from 'aos';
import 'aos/dist/aos.css'


const PrizeItem = ({content , index}) => {
    const router = useRouter();
    const prizeDetailhandler = () => {
        router.replace('/details/price_details');
    }

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <div data-aos = "fade-up" className={`shadow-[0_0_15px_2px_rgba(0,0,0,0.4)] ${index % 2 === 0 ? 'border-orange-500' : 'border-black'} text-center md:max-w-[420px] rounded-xl grid grid-cols-1 border-2 bg-white my-5 ${index % 3 === 0 ? 'md:mr-5 md:my-5' : 'md:mx-5 md:my-5'}`}>
        <div className={`rounded-t-xl ${index % 2 === 0 ? 'bg-orange-500' : 'bg-black'} text-white p-10`}>
            <h1 className="uppercase font-bold text-[32px]">{content.rate}</h1>
            
        </div>
        <div className="p-10">
            {content.desc}
        </div>
        <div className={`text-[42px] font-bold ${index % 2 === 0 ? 'text-black mb-5' : 'text-orange-500 mb-5'} `}>
            €{content.price }
        </div>
        <div className='mb-[36px]'>excl vat</div>
        <div className="mb-[36px]">
            <button onClick={prizeDetailhandler} className="bg-black hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                Show More
            </button>
        </div>
    </div>
  )
}

export default PrizeItem;