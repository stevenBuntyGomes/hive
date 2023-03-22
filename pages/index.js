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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,100;1,200;1,400&display=swap" rel="stylesheet"/> 

      </Head>
  }
  return (
    <>
      {indexHeader()}
      <Layout>
        <div className='md:w-[1440px] md:m-auto'>
          <Banner/>
          <About/>
          <Service/>
          <Video/>
          <ServicePrice/>
          <DownloadApp/>
          <AnyProblem/>
          <Testimonial/>
          <Clients/>
          <Subscribe/>
        </div>
      </Layout>
    </>
  )
}
