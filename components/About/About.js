import React, {useState, useEffect} from 'react'
import Image from 'next/image'

const About = () => {
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

    const handleColorChange = (event) => {
        setGroup(event.target.value);
    }


    const onClick =() => {

    }
  return (
    <>
        <div className="w-full max-w-7xl rounded bg-white p-10 lg:px-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-2/5 px-10 mb-10 md:mb-0">
                    <div className="relative">
                        <Image src="/about.png" width={400} height = {659} className="md:w-[400px] relative z-10 md:h-[659px]" alt=""/>
                    </div>
                </div>
                <div className="w-full md:w-3/5 px-10 text-center md:text-left">
                    <div className="mb-10">
                        <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">About us</h4>
                        <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">Plumbing is what we do</h5>
                        <p className="text-base leading-[30px]">We are an award winning plumbing company with over 20 years experience in the
                            business. We provide a wide range of services for both residential and commercial clients.</p>
                        <div className="py-10">
                            <div className="grid grid-cols-2">
                                {options.map((option, index) => (
                                <label className="inline-flex items-center" key={index}>
                                    <input
                                    type="radio"
                                    className="form-radio h-4 w-4 text-orange-500"
                                    // value={option.name}
                                    // checked={group === option.name}
                                    value={index == 0 ? 'teal' : 'bunty'}
                                    checked={group === index == 0 ? 'teal' : 'bunty'}
                                    onChange={handleColorChange}
                                    />
                                    <span className="ml-2 text-gray-700">{option.name}</span>
                                </label>
                                ))}
                            </div>
                        </div>

                        <p className='text-base leading-[30px]'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out
                            our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your
                            one stop shop.</p>
                        <div className="pt-10 q-gutter-md">
                            <button className="bg-black hover:bg-orange-500 text-white font-medium py-2 px-5 rounded-md mr-3" onClick={onClick}>
                                Get More
                            </button>
                            <button className="bg-black hover:bg-orange-500 hover:text-white text-white font-medium py-2 px-5 rounded-md" onClick={onClick}>
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About