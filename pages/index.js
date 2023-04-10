import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Banner from '../components/Home/Banner'
import About from '../components/About/About'
import Service from '../components/Service/Service'
import Video from '../components/Video/Video'
import { ServicePrice } from '../components/Service/ServicePrice'
import DownloadApp from '../components/Video/DownloadApp'
import AnyProblem from '../components/Service/AnyProblem'
import Testimonial from '../components/About/Testimonial'
import Clients from '../components/Service/Clients'
import Subscribe from '../components/About/Subscribe'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <div className='container-full mx-auto'>
          <Banner/>
          <About/>
          <Service/>
          <Video/>
          <ServicePrice/>
          <DownloadApp/>
        </div>
          <AnyProblem/>
          <div className='container-full mx-auto'>
          <Testimonial/>
          <Clients/>
          <Subscribe/>
        </div>
      </Layout>
    </>
  )
}
