import React, {useEffect, useState} from 'react'
import Layout from '@/components/Layout';
import Clients from '@/components/Service/Clients';
import Subscribe from '@/components/About/Subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faPhoneFlip,
    faEnvelope,
    faXmark,
} from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsAction } from "@/Action/SettingsAction"
import { sendContactAction, removeContactMessageAction } from '@/Action/ContactUsAction';
import Head from 'next/head';
import { getGoogleMapAction } from '@/Action/GoogleMapAction';


const Contact = () => {
    const dispatch = useDispatch();
    const {settings, loading} = useSelector((state) => state.settings);
    const {message: contactMessage} = useSelector((state) => state.contact);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const {map} = useSelector((state) => state.map);
    const fetchGoogleMap = async () => {
        dispatch(getGoogleMapAction());
    }

    const getSettingsHandler = async () => {
        dispatch(getSettingsAction());
    }

    const sendContactMessageHandler = async () => {
        dispatch(sendContactAction(firstName, lastName, phone, email, message));
        setLastName('');
        setFirstName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    const removeContactMessageHandler = () => {
        dispatch(removeContactMessageAction());
    }

    useEffect(() => {
        fetchGoogleMap();
        getSettingsHandler();
        Aos.init({duration: 1000});
    }, []);

    const indexHeader = () => {
    <Head>
      {/* oi kam kor */}
        <title>Hive</title>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        {/* <title>On Time Delivery &amp; Installation Services, LLC</title> */}

        <meta name="author" content="On Time Delivery &amp; Installation Services, LLC"/>
        <meta name="description" content="Installations: Gas/Electric Ranges, Cooktops,Wall/Double Ovens, Microwaves, Fridges, Dishwashers,Washing Machines,Gas/Electric Dryer,Pro Hoods, Pro Appliances"/>

        <meta name="generator" content="Starfield Technologies; Go Daddy Website Builder 8.0.0000"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://img1.wsimg.com/isteam/ip/b9cddd56-4571-4583-9d8f-c78d87254b08/Banner%20On%20Time%20Delivery.jpg"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:url" content="https://ontimedelsvc.com/"/>
        <meta property="og:site_name" content="On Time Delivery &amp; Installation Services, LLC"/>
        <meta property="og:title" content="On Time Delivery &amp; Installation Services, LLC"/>
        <meta property="og:description" content="Installations: Gas/Electric Ranges, Cooktops,Wall/Double Ovens, Microwaves, Fridges, Dishwashers,Washing Machines,Gas/Electric Dryer,Pro Hoods, Pro Appliances
        "/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@OnTimeDelivery3"/>
        <meta name="twitter:title" content="Hive-Haustechnik"/>
        <meta name="twitter:description" content="Elektrotechnik , Sanitär,
Wir sind ein junges dynamisches Unternehmen mit langjähriger Erfahrung. Die Bedürfnisse unserer Kunden sind uns sehr wichtig.
        "/>
        <meta name="twitter:image" content="https://twitter.com/HiveHaustechnik/photo"/>
        <meta name="twitter:image:alt" content="Hive-Haustechnik"/>
        <meta name="theme-color" content="#C8A000"/>
        {/* youtube */}
        <meta name="youtube:card" content="summary"/>
        <meta name="youtube:site" content="@OnTimeDelivery3"/>
        <meta name="youtube:title" content="Hive-Haustechnik"/>
        <meta name="youtube:description" content="@Hive-Haustechnik"/>
        <meta name="youtube:image" content="https://yt3.googleusercontent.com/_W1IRpxJAy1SqMj64boX7oa89HQsDBwLLxOM1me-MI0Y0MTJnS8pIVuIdl5i_66cGMID3_jQYQ=s176-c-k-c0x00ffffff-no-rj"/>
        <meta name="youtube:image:alt" content="Hive-Haustechnik"/>
        <meta name="theme-color" content="#C8A000"/>
        {/* instagram */}
        <meta name="instagram:card" content="summary"/>
        <meta name="instagram:site" content="@OnTimeDelivery3"/>
        <meta name="instagram:title" content="Hive - Haustechnik e. U."/>
        <meta name="instagram:description" content="Elektrotechnik
Heizung Klima Lüftung Sanitär
Trockenbau"/>
        <meta name="instagram:website" content="https://yt3.googleusercontent.com/_W1IRpxJAy1SqMj64boX7oa89HQsDBwLLxOM1me-MI0Y0MTJnS8pIVuIdl5i_66cGMID3_jQYQ=s176-c-k-c0x00ffffff-no-rj"/>
        <meta name="instagram:image" content="https://yt3.googleusercontent.com/_W1IRpxJAy1SqMj64boX7oa89HQsDBwLLxOM1me-MI0Y0MTJnS8pIVuIdl5i_66cGMID3_jQYQ=s176-c-k-c0x00ffffff-no-rj"/>
        <meta name="instagram:image:alt" content="Hive-Haustechnik"/>
        <meta name="theme-color" content="#C8A000"/>
        {/* facebook */}
        <meta name="instagram:card" content="summary"/>
        <meta name="instagram:site" content="@OnTimeDelivery3"/>
        <meta name="instagram:title" content="Hive - Haustechnik e. U."/>
        <meta name="instagram:description" content="Elektrotechnik
Heizung Klima Lüftung Sanitär
Trockenbau"/>
        <meta name="instagram:website" content="https://yt3.googleusercontent.com/_W1IRpxJAy1SqMj64boX7oa89HQsDBwLLxOM1me-MI0Y0MTJnS8pIVuIdl5i_66cGMID3_jQYQ=s176-c-k-c0x00ffffff-no-rj"/>
        <meta name="instagram:image" content="https://yt3.googleusercontent.com/_W1IRpxJAy1SqMj64boX7oa89HQsDBwLLxOM1me-MI0Y0MTJnS8pIVuIdl5i_66cGMID3_jQYQ=s176-c-k-c0x00ffffff-no-rj"/>
        <meta name="instagram:image:alt" content="Hive-Haustechnik"/>
        <meta name="theme-color" content="#C8A000"/>
{/* 
            <meta name="google-site-verification" content="BWGbcQysQDMY3CUG52WgSL3mcv2BBWGzSFH7h6jEl7M" />
            <meta name="google-site-verification" content="LkPXwFzf5YwCygIHTPgZIavg1A48JWt_KyInPvfE7Ho" /> */}

                

              </Head>
  }

  return (
      <>
      {indexHeader()}
          <Layout> 
              <div className='bg-white container-full mx-auto'>
                <div className="relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10 mb-10">
                    <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                        <div data-aos = "fade-up" className='md:max-w-[1440px] md:m-auto'>
                            <div className='mt-16 p-10 text-center text-white  '>
                                <h2 className='uppercase font-bold text-[42px] pb-2'>Contact US</h2>
                                <h6 className='uppercase font-bold text-[20px]'>Home -  Contact US</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='justify-between items-center rounded-xl transform -translate-y-32 shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)] mx-5 md:mx-[70px] lg:mx-[80px] gap-5'>
                    <div data-aos = "fade-up">
                        <div className="text-center w-max-[360px] py-5 bg-white rounded-xl">
                            <h2 className="text-[32px] font-bold text-center pt-[44px] leading-[36px] pb-[56px]">
                                CONTACT US
                            </h2>
                        </div>
                        <div className="mx-auto">
                                <div className='md:flex items-center justify-center text-center pb-[60px] sans-serif'>
                                    <div className = "lg:flex px-5 md:px-[37px] md:border-r-2 border-orange-500 py-[16px]">
                                        <FontAwesomeIcon icon = {faLocationDot} className='pb-[10px] mb-5 md:pb-0 pt-[8px] text-[35px] text-orange-500 px-[14px]'/>
                                        <div className='text-black text-left'>
                                            <p className='cursor-pointer hover:text-orange-500'>{settings && settings.first_address}</p>
                                            <p className='cursor-pointer hover:text-orange-500'>{settings && settings.second_address}</p>
                                        </div>
                                    </div>
                                    <div className = "lg:flex px-5 md:px-[37px] md:border-r-2 border-orange-500 py-[16px]">
                                        <FontAwesomeIcon icon = {faPhoneFlip} className='pb-[10px] mb-5 md:pt-[8px] md:pb-0 text-[35px] text-orange-500 px-[14px]'/>
                                        <div className='text-black'>
                                          <a href={`tel: ${settings && settings.first_number}`} className="text-base font-medium mt-2 md:mt-0 cursoir-pointer hover:text-orange-500 block">
                                                  {settings && settings.first_number}
                                              </a>
                                              
                                              <a href={`tel: ${settings && settings.second_number}`} className="text-base cursoir-pointer hover:text-orange-500 block">
                                                  {settings && settings.second_number}
                                          </a>

                                     
                                        </div>
                                    </div>
                                    <div className = "lg:flex px-5 md:px-[37px] py-[16px]">
                                        <FontAwesomeIcon icon = {faEnvelope} className='pb-[10px] mb-5 md:pb-0 pt-[8px] text-[35px] text-orange-500 px-[14px]'/>
                                        <div className='text-black'>

                                        <a href={`mailto: ${settings && settings.first_email}`} target='_blank' className="text-md cursoir-pointer hover:text-orange-500 block text-left">
                                            {settings && settings.first_email}
                                        </a>
                                        
                                        <a href={`mailto: ${settings && settings.second_email}`} target='_blank' className="text-md cursoir-pointer hover:text-orange-500 block text-left">
                                            {settings && settings.second_email}
                                          </a>
                                          
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
              
                <div data-aos = "fade-up" className='grid md:grid-cols-2 grid-cols-1 justify-center items-center transform -translate-y-32  md:px-20 px-5 gap-5'>
                        <div className='bg-[url("/contactWorkImage.png")] bg-no-repeat bg-cover max-w-[935px] max-h-[959px] md:w-[150%] md:h-[959px]'>

                        </div>
                    <div className="text-center w-max-[360px] rounded-xl py-5 bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)] md:mr-4 -mt-[50px] md:mt-0">
                        
                        <section className="text-gray-700 body-font relative">
                            <div className="md:pl-[52px] md:pr-[52px] px-[30px] pt-[54px] pb-[54px] py-[40px] mx-auto">
                            <div className="text-center md:text-left flex flex-col w-full">
                                <h1 className="text-center md:text-left text-base font-medium leading-[18px] pb-[12px]">
                                    QUICK SUPPORT
                                </h1>
                                <h2 className="text-[32px] font-bold text-center md:text-left leading-[36px] pb-[56px]">
                                    SEND US A MESSAGE
                                </h2>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                    <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                        <div className="relative">
                                        <input
                                            type="text"
                                            name="first_name"
                                            placeholder='First Name'
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                        />
                                        </div>
                                    </div>
                                    
                                    <div className="pb-[28px] w-full md:w-1/2">
                                        <div className="relative">
                                        <input
                                            type="text"
                                            name="last_name"
                                            placeholder='Last Name'
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                        />
                                        </div>
                                    </div>

                                    <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                        <div className="relative">
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder='Phone Number'
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                        />
                                        </div>
                                    </div>
                                    
                                    <div className="pb-[28px] w-full md:w-1/2">
                                        <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder='Your Email'
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        </div>
                                    </div>

                                    <div className="pb-[31px] w-full">
                                        <div className="relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder='Message'
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            value={message}
                                            onChange={e => setMessage(e.target.value)}
                                        ></textarea>
                                        </div>
                                    </div>
                                    <div className="pb-[4px] w-full">
                                        <button onClick={() => sendContactMessageHandler()} className="md:w-full py-2 px-5 md:max-px-[135px] md:py-[20px] font-bold bg-orange-500 text-white rounded-md">
                                            SEND US A MESSAGTE
                                        </button>
                                    </div>   
                                    <div className="mx-5 md:mt-0 mt-5">
                                    {contactMessage && (
                                        <div onClick={() => removeContactMessageHandler()} className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 text-center shadow-md" role="alert">
                                            <div className="text-center">
                                                <p className="text-sm text-center">{contactMessage} <FontAwesomeIcon icon={faXmark}/></p>
                                            </div>
                                        </div>
                                    )}

                                    
                                    
                                </div>
                                </div>
                            </div>
                        </section>   
                    </div>
                  </div> 
                </div>

                <div className='mt-[50px] md:mt-[100px]'>
                        <iframe src={map && map.map_link}
                            className='w-full md:max-w-full h-[400px] md:h-[661px] bg-no-repeat bg-cover' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.244618545146!2d90.41679097639884!3d23.760844307764646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8783ab9882f%3A0x50f429f46d937f3c!2sRampura%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1679686568123!5m2!1sen!2sbd" className='w-full md:max-w-full h-[400px] md:h-[661px] bg-no-repeat bg-cover' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
              
                <div className='container-full mx-auto'>
                    <Clients />
                    <Subscribe />
                </div>
 
        </Layout>
    </>
  )
}

export default Contact