import React, {useState} from "react";
import Link from "next/link";

const ServiceItem = (content , index) => {
  return (
    <div className="shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] text-center md:w-[370px] rounded-xl m-5" key={index}>
        <img src={content.content.img} className="w-full h-[250px] rounded-md" />
        <div className="text-xl font-bold py-4">
            {content.content.title}
        </div>
        <div className="w-[152px] h-[3px] bg-orange-500 text-center items-center m-auto"></div>
        <div className="p-4 text-textColor mb-5">
            {content.content.desc}
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