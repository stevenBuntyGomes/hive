import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAnyProblemAction } from '@/Action/AnyProblemAction';
import Link from 'next/link';

const AnyProblem = () => {
    const dispatch = useDispatch();
    const {anyProblem} = useSelector((state) => state.anyProblem);
    const onClick = () => {

    }

    const fetchAnyProblem = () => {
        dispatch(getAnyProblemAction());
    };

    useEffect(() => {
        fetchAnyProblem();
        Aos.init({duration: 1000});
    }, []);
  return (
    <>
        <main className='bg-[#F9F8F9]'>
            <div 
                className="text-center md:text-left w-full md:h-[623px] bg-[url('/problem.png')] bg-no-repeat bg-cover mx-auto text-gray-800 relative md:p-20 pt-[50px] md:pt-0">
                <div className="md:max-w-[1440px] mx-auto md:flex items-center">
                    <div className="w-full md:w-2/5 md:px-10 px-5 mb-10 md:mb-0">
                        <div className="">
                            <img src="/worker.png"
                                className="md:w-[435px] w-[265px] md:h-[548px] h-[348px] m-auto md:absolute  bottom-0" alt=""/>
                        </div>
                    </div>
                    <div data-aos = "fade-up" className="w-full md:w-3/5 md:px-10 px-5 pb-[50px] md:pb-0">
                        <div className="md:mt-28 mt-10 md:px-10 px-5">
                            <h5 className="text-orange-500 uppercase sans-serif font-bold md:text-[32px] text-2xl pb-3">CALL: {anyProblem && anyProblem.phone}</h5>
                            <h4 className="font-bold uppercase md:text-[42px] text-4xl mb-5">{anyProblem && anyProblem.title}</h4>
                            <p className="">{anyProblem && anyProblem.description}</p>
                            <div className="pt-10">
                                <Link href = "/contact" className="bg-black hover:bg-orange-500 text-white font-medium py-2 my-2 md:my-0 ml-2 px-5 rounded-md mr-3" onClick={onClick}>
                                    Contact Us
                                </Link>
                                <Link href = "/inquiry" className="bg-black hover:bg-orange-500 hover:text-white text-white font-medium py-2 my-2 md:my-0 px-5 rounded-md" onClick={onClick}>
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default AnyProblem