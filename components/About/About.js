import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import {getAboutAction} from '../../Action/AboutAction'
import Link from 'next/link';
import {ABOUT_IMAGE_URL} from '../../config'
import parse from 'html-react-parser';

const About = () => {
    const dispatch = useDispatch();
    const {about, loading} = useSelector((state) => state.about);
    const [group, setGroup] = useState('');

    const options = [
        {
            name: 'Battery too low',
        },
        {
            name: 'Picture uploaded',
        },
        {
            name: 'Battery too low',
        },
        {
            name: 'Friend request',
        },
        {
            name: 'Battery too low',
        },
        {
            name: 'Picture uploaded',
        },
    ];

    const [animated, setAnimated] = useState(false);

    const handleColorChange = (event) => {
        setGroup(event.target.value);
    }


    const onClick =() => {

    }

    const getAboutDispatchHandler = async () => {
        dispatch(getAboutAction());
    }
    useEffect(() => {
        getAboutDispatchHandler();
        Aos.init({duration: 1000});
    }, [dispatch]);
    
  return (
      <>
        <div className="bg-white w-full rounded p-5 md:p-10 md:px-20 text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-5">
                <div data-aos="fade-up" className={`w-full md:w-2/5 px-5 mb-10 md:mb-0`}>
                    <div className="md:relative">
                        <img src={`${ABOUT_IMAGE_URL}${about && about?.left_image}`} width={400} height = {659} className="md:w-[400px] relative z-10 md:h-[659px]" alt=""/>
                    </div>
                </div>
                
                <div data-aos="fade-up" className="w-full md:w-3/5 md:px-10 px-5 text-center md:text-left">
                    <div className="mb-10">
                        <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">{about && about?.heading}</h4>
                        <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">{about && about.title}</h5>
                        <p className="text-base leading-[30px]">{parse(`${about && about?.description}`)}</p>
                        {/* <div className="py-10">
                            <div className="grid grid-cols-2">
                                {options.map((option, index) => (
                                <label className="inline-flex items-center" key={index}>
                                    <input
                                    type="radio"
                                    className="form-radio h-4 w-4 text-orange-500"
                                    value={index == 0 ? 'teal' : 'bunty'}
                                    checked={group === index == 0 ? 'teal' : 'bunty'}
                                    onChange={handleColorChange}
                                    />
                                    <span className="ml-2 text-gray-700">{option.name}</span>
                                </label>
                                ))}
                            </div>
                        </div> */}

                        {/* <p className='text-base leading-[30px]'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out
                            our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your
                            one stop shop.</p> */}
                        <div className="pt-10 q-gutter-md">
                            <Link href="/contact" className="bg-black hover:bg-orange-500 text-white font-medium py-2 px-5 rounded-md mr-3" onClick={onClick}>
                                GET MORE
                            </Link>
                            <Link href="/inquiry" className="bg-black hover:bg-orange-500 hover:text-white text-white font-medium py-2 px-5 rounded-md" onClick={onClick}>
                                GET A QUOTE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About