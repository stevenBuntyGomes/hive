import React, {useState, useEffect} from "react";
import Link from "next/link";
import Aos from 'aos';
import 'aos/dist/aos.css'


const ServiceItem = ({content , index}) => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <div data-aos = "fade-up" className={`shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] text-center md:max-w-[28.5%] rounded-md grid grid-cols-1 my-5 ${index % 3 === 0 ? 'md:mr-5 md:my-5' : 'md:mx-5 md:my-5'}`} key={index}>
        <img src={content.img} className="w-full h-[216px] md:h-[250px] rounded-md" />
        <div className="text-xl font-bold py-4">
            {content.title}
        </div>
        <div className="w-[152px] h-[3px] bg-orange-500 text-center items-center m-auto"></div>
        <div className="p-4 text-textColor mb-5">
            {content.desc}
        </div>
        <div className="mb-10">
            <Link href='/details/service_details' className="bg-black hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                Show More
            </Link>
        </div>
    </div>
  )
}

export default ServiceItem;