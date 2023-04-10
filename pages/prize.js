import React, {useEffect} from 'react'
import Layout from '../components/Layout'
import PrizeItem from '../components/Service/PrizeItem'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPriceAction } from '@/Action/PriceAction';
import Head from 'next/head';



const Services = () => {
    const dispatch = useDispatch(); 
    const {prices, loading, error} = useSelector((state) => state.price);

    const getPricesHandler = () => {
        dispatch(getPriceAction());
    }

    useEffect(() => {
        getPricesHandler();
        Aos.init({duration: 1000});
    }, []);

    const contents = [
        {
            rate: 'flat rate 1',
            price: '199',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 2',
            price: '189',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 3',
            price: '200',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 4',
            price: '199',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 5',
            price: '189',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 6',
            price: '200',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 1',
            price: '199',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 2',
            price: '189',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 3',
            price: '200',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 4',
            price: '199',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 5',
            price: '189',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 6',
            price: '200',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 1',
            price: '199',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 2',
            price: '189',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 3',
            price: '200',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 4',
            price: '199',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 5',
            price: '189',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            rate: 'flat rate 6',
            price: '200',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control. Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
    ];

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
              
            <div className="relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div data-aos = "fade-up" className='md:max-w-[1440px] md:m-auto'>
                        <div className='mt-16 p-10 text-center text-white  '>
                            <h2 className='uppercase font-bold text-[42px] pb-2'>Prizes</h2>
                            <h6 className='uppercase font-bold text-[20px]'>Home - Prizes</h6>
                        </div>
                    </div>
                </div>
            </div>
                    
        <div className='md:m-auto bg-[#F5F5F5]'>
            <main className="bg-slate-50 p-5 md:p-10 container-full mx-auto">
                      
                <div data-aos = "fade-up" className="text-center mb-10">
                    <h2 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">Our Services PRICES</h2>
                    <h2 className="font-bold uppercase md:text-[42px] text-4xl mb-5">Quality Service WITH STANDARD PRICES</h2>
                    <div className="flex justify-center items-center">
                        <p className="max-w-[830px]">We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts..</p>
                    </div>
                </div>
                

                <div className='flex flex-row flex-wrap justify-center'>
                {prices && prices.map((price, index) => (
                    <PrizeItem price={price} index={index} key={index} />
                ))}
                </div>
            </main>
          </div>
        </Layout>
    </>
  )
}

export default Services