import React, {useState, Fragment, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    inst
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className = 'md:w-[1440px] md:m-auto sticky top-0 z-50'>
        <div className='bg-black md:px-12 md:py-5 md:flex md:w-auto md:flex-grow'>
            <div className='text-white text-xl font-raleway font-normal md:flex-grow'>
                Call Us: +43 660 3924728
            </div>
            <div className="text-white gt-sm">
                <div className="text-sm md:flex-grow">
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mr-6">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </div>
            </div>
        </div>
        <div className='bg-white py-5 gt-sm md:px-20 px-5 md:flex md:w-auto md:flex-grow shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]'>
              <div className='md:flex-grow'>
                <Link href="/">
                    <Image src="/hive.png" alt="hive-logo" width={200} height ={50} className="md:h-[50px] md:w-[200px] w-[80px] h-[20px]" />
                </Link>
            </div>
            <div className="text-black gt-sm pt-2">
                <div className="md:flex-grow text-base">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                        Home
                    </Link>
                    <Link href="/service" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                        Services
                    </Link>
                    <Link href="/prize" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                        Prizes
                    </Link>
                    <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                        About Us
                    </Link>
                    <Link href="/inquiry" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                        Inquery
                    </Link>
                    <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header