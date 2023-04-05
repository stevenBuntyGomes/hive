import React, {useState, useEffect} from 'react'
import Layout from '@/components/Layout';
import Clients from '@/components/Service/Clients';
import Subscribe from '@/components/About/Subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import { sendInqueryAction, removeInqueryAction } from '@/Action/InqueryAction';
import Head from 'next/head';

const Inquiry = () => {
    const dispatch = useDispatch();
    const {message: inquerymessage} = useSelector((state) => state.inquery);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [services, setServices] = useState('');
    const [budget, setbudget] = useState('');
    const [message, setMessage] = useState('');

    const sendInqueryHandler = async () => {
        await dispatch(sendInqueryAction(name, email, phone, address, services, budget, message));
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setServices('');
        setbudget('');
        setMessage('');
    }


    const removeInqueryHandler = async () => {
       await dispatch(removeInqueryAction());
    }

    useEffect(() => {
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
        <meta name="twitter:title" content="On Time Delivery &amp; Installation Services, LLC"/>
        <meta name="twitter:description" content="Installations: Gas/Electric Ranges, Cooktops,Wall/Double Ovens, Microwaves, Fridges, Dishwashers,Washing Machines,Gas/Electric Dryer,Pro Hoods, Pro Appliances
        "/>
        <meta name="twitter:image" content="https://img1.wsimg.com/isteam/ip/b9cddd56-4571-4583-9d8f-c78d87254b08/Banner%20On%20Time%20Delivery.jpg"/>
        <meta name="twitter:image:alt" content="On Time Delivery &amp; Installation Services, LLC"/>
        <meta name="theme-color" content="#C8A000"/>


            <meta name="google-site-verification" content="BWGbcQysQDMY3CUG52WgSL3mcv2BBWGzSFH7h6jEl7M" />
            <meta name="google-site-verification" content="LkPXwFzf5YwCygIHTPgZIavg1A48JWt_KyInPvfE7Ho" />

                

              </Head>
  }

  return (
      <>
        {indexHeader()}
          <Layout> 
              
            <div className="  relative bg-[url('/inquery.png')] bg-no-repeat bg-cover w-full h-[378px] md:h-[783px] md:px-20 py-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div data-aos = "fade-up" className='md:max-w-[1440px] md:m-auto'>
                        <div className='mt-16 p-10 text-center text-white  '>
                            <h2 className='uppercase font-bold text-[42px] pb-2'>Inquiry</h2>
                            <h6 className='uppercase font-bold text-[20px]'>Home -  Inquiry</h6>
                        </div>
                    </div>
                </div>
              </div>

              <div className='bg-[#F5F5F5] container-full mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center transform -translate-y-32 md:-translate-y-[369px] md:h-[700px] md:px-20 px-5 gap-5'>
                  <div className="mb-5 md:mb-0 text-center w-max-[360px] py-2 bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)]">
                      
                     <section className="text-gray-700 body-font relative">
                        <div className="md:pl-[52px] md:pr-[52px] pl-[30px] pr-[30px] md:pt-[54px] pt-[40px] md:pb-[54px] pb-[40px] mx-auto">
                        <div className="text-center md:text-left flex flex-col w-full">
                            <h1 className="text-center md:text-left text-base font-medium leading-[18px] pb-[12px]">
                                FREE CONSULTATION
                            </h1>
                            <h2 className="text-[32px] font-bold md:text-left leading-[36px] pb-[56px]">
                                GET A FREE INQUERY
                            </h2>
                        </div>
                         <div className="flex flex-wrap -m-2">
                                <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Full Name'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                        value={name}
                                        onChange = {(e) => setName(e.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className="pb-[28px] w-full md:w-1/2">
                                    <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Email'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                        value={email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    />
                                    </div>
                                  </div>

                                   <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                    <div className="relative">
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder='Phone Number'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                        value={phone}
                                        onChange = {(e) => setPhone(e.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className="pb-[28px] w-full md:w-1/2">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder='Address'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                        value={address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    />
                                    </div>
                                  </div>

                                  <div className="pb-[28px] w-full md:w-1/2 md:pr-[24px]">
                                    <div className="relative">
                                    <input
                                        type="text"
                                        name="service"
                                        placeholder='Your Service'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                        value={services}
                                        onChange = {(e) => setServices(e.target.value)}
                                    />
                                    </div>
                                  </div>

                                  <div className="pb-[28px] w-full md:w-1/2">
                                    <div className="relative">
                                    <input
                                        type="number"
                                        name="budget"
                                        placeholder='Your Budget'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out"
                                        value={budget}
                                        onChange = {(e) => setbudget(e.target.value)}
                                    />
                                    </div>
                                  </div>
                                  
                                <div className="pb-[31px] w-full">
                                    <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Message'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-3 px-5 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        value={message}
                                        onChange = {(e) => setMessage(e.target.value)}
                                    ></textarea>
                                    </div>
                                </div>
                                <div className="pb-[4px] w-full">
                                    <button onClick={() => sendInqueryHandler()} className="py-2 px-5 md:w-full md:max-px-[135px] md:py-[20px] font-bold bg-orange-500 text-white rounded-md">
                                        GET A FREE INQUERY
                                    </button>
                                </div>  
                                {/* <div onClick={() => removeContactMessageHandler()} className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 text-center shadow-md" role="alert">
                                            <div className="text-center">
                                                <p className="text-sm text-center">{contactMessage} <FontAwesomeIcon icon={faXmark}/></p>
                                            </div>
                                        </div>  */}
                            </div>
                        </div>
                    </section>   
                </div>
                <div className='bg-[url("/inquery01.png")] w-full bg-no-repeat bg-cover w-max-[360px] h-[400px] md:h-auto md:ml-[-20px]'>
                    <div className='text-center md:text-left md:mt-[351px] mb-[51px] md:ml-[60px] mt-[200px]'>
                        <h3 className="md:text-[70px] text-2xl font-bold md:pt-5 text-orange-500 md:mb-[26px]">
                            LETS
                        </h3>
                        <h3 className="lg:text-[70px] md:text-[60px] text-2xl font-bold md:pt-5 text-white md:mb-[26px]">
                            CONNECT
                        </h3>
                        <h3 className="lg:text-[70px] md:text-[60px] text-2xl font-bold md:pt-5 text-orange-500 md:mb-[46px]">
                            TOGETHER
                        </h3>
                        <div className="p-2 w-full">
                            <button className="rounded-md font-bold bg-transparent text-white py-2 px-[50px] border-2 border-white hover:bg-orange-500 hover:border-orange-500 transition">
                                CONTACT US <FontAwesomeIcon icon = {faChevronRight}/><FontAwesomeIcon className='ml-[-2px]' icon = {faChevronRight}/>
                            </button>
                        </div>
                    </div>
                </div>
                
              </div>
              <div className = "mt-[-100px] md:mt-[-320px]">
                <Clients />
                <Subscribe />
              </div>
                  
              </div>

        </Layout>
    </>
  )
}

export default Inquiry