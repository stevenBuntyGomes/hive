import React, {useEffect} from 'react'
import Layout from '../components/Layout'
import ServiceItem from '../components/Service/ServiceItem'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getServiceAction } from "@/Action/ServiceAction";
import Head from 'next/head';





const Services = () => {

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
    const Router = useRouter();
    const dispatch = useDispatch();
    const {services, loading, error} = useSelector((state) => state.service);
    const onClick = (service) => {
        Router.push({
            pathname: '/details/service_details',
            query: { service: service.id }
    })
    }
    const getServiceHandler = async () => {
        await dispatch(getServiceAction());
    }

    useEffect(() => {
        getServiceHandler();
        Aos.init({duration: 1000});
    }, []);

  
  return (
    <>
    {indexHeader()}
        <Layout>

            <div className="relative bg-[url('/serviceBackground.png')] bg-no-repeat bg-cover w-full h-[378px] py-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div data-aos = "fade-up" className=''>
                        <div className='mt-16 p-10 text-center text-white  '>
                            <h2 className='uppercase font-bold text-[42px] pb-2'>Services</h2>
                            <h6 className='uppercase font-bold text-[20px]'>Home - Services</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#F5F5F5] md:m-auto'>
                <main className="bg-slate-50 p-5 md:p-10 container-full mx-auto">
                    <div data-aos = "fade-up" className="text-center mb-10">
                        <h2 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">Our Services</h2>
                        <h2 className="font-bold uppercase md:text-[42px] text-4xl mb-5">Quality Service is Our Guarantee</h2>
                        <div className="flex justify-center items-center">
                            <p className="max-w-[830px]">We offer a wide range of plumbing services catered to
                                both
                                residential and commercial
                                clients. Even the
                                all-powerful Pointing has no control about the blind texts.</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row flex-wrap justify-center'>
                        {services && services.map((service, index) => (
                        <ServiceItem className="w-1/3" key = {index} content={service} index={index} />
                        ))}
                    </div>
                </main>  
                  
            </div>
        </Layout>
    </>
  )
}

export default Services