import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightLong,
    
} from '@fortawesome/free-solid-svg-icons'
import Clients from '@/components/Service/Clients';
import Subscribe from '@/components/About/Subscribe';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import {ABOUT_IMAGE_URL} from '../config'
import {getAboutAction} from '../Action/AboutAction'
import { getSettingsAction } from "@/Action/SettingsAction";
import Head from 'next/head';
import parse from 'html-react-parser';

const About = () => {

    const dispatch = useDispatch();
    const {about, loading} = useSelector((state) => state.about);
    const [group, setGroup] = useState('');
    

    const getSettingsHandler = async () => {
        dispatch(getSettingsAction())
    }

    const getAboutDispatchHandler = async () => {
        dispatch(getAboutAction());
    }

    useEffect(() => {

        getAboutDispatchHandler();
        getSettingsHandler();
        Aos.init({duration: 1000});
    }, [dispatch]);

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
              
            <div className="relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10 mb-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div data-aos = "fade-up" className='md:max-w-[1440px] md:m-auto'>
                        <div className='mt-16 p-10 text-center text-white'>
                            <h2 className='uppercase font-bold text-[42px] pb-2'>About Us</h2>
                            <h6 className='uppercase font-bold text-[20px]'>Home -  About Us</h6>
                        </div>
                    </div>
                </div>
              </div>
              
              <div className='bg-[#F5F5F5] container-full mx-auto'>
                  <div className="w-full rounded bg-white p-10 md:px-20 text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                    <div data-aos = "fade-up" className="w-full md:w-2/5 md:px-10 px-5 mb-10 md:mb-0">
                        <div className="relative">
                            <img src={`${ABOUT_IMAGE_URL}${about && about?.left_image}`} width={400} height = {659} className="md:w-[400px] relative z-10 md:h-[659px]" alt=""/>
                        </div>
                    </div>
                    <div data-aos = "fade-up" className="w-full md:w-3/5 md:px-10 px-5 text-center md:text-left">
                        <div className="mb-10">
                            <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">{about && about?.heading}</h4>
                            <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">{about && about?.title}</h5>
                            <p className="text-base leading-[30px] text-left">{parse(`${about && about?.description}`)}</p>
                        </div>
                      </div>
                  </div>
                  
                    <div data-aos = "fade-up" className="mt-[85px]">
                        <h5 className="font-bold uppercase md:text-[20px] mb-5">{about && about?.first_heading}</h5>
                          <div data-aos="fade-up" style={{ backgroundImage: `url(${ABOUT_IMAGE_URL}${about && about?.first_image})` }} className={`bg-no-repeat bg-cover w-full h-[278px] md:px-20 py-10 mb-10`}></div>
                        <p className="pb-10">{parse(`${about && about?.first_description}`)}
                        </p>   
                    </div>
                   
                    <div data-aos = "fade-up" className="mt-[85px] mb-10">
                        <h5 className="font-bold uppercase md:text-[20px] mb-5">{about && about?.second_heading}</h5>
                        <div data-aos = "fade-up" style={{ backgroundImage: `url(${ABOUT_IMAGE_URL}${about && about?.second_image})`}}  className={`bg-no-repeat bg-cover w-full h-[278px] md:px-20 py-10 mb-10`}></div>
                            
                        <p className="pb-10">{parse(`${about && about?.second_description}`)}
                        </p>
                    </div>
                      
                </div>
              </div>
                  
            <Clients />
            <Subscribe/>
     
          </Layout>
        
    </>
  )
}

export default About