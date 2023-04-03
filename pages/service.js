import React, {useEffect} from 'react'
import Layout from '../components/Layout'
import ServiceItem from '../components/Service/ServiceItem'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getServiceAction } from "@/Action/ServiceAction";


const Services = () => {

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

    const contents = [
        {
            img: 'https://i.ibb.co/QNv7649/image1.png',
            title: 'Plumbing Design',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            img: 'https://i.ibb.co/b5TyhtP/image2.png',
            title: 'Water Heating & Cooling',
            desc: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
        },
        {
            img: 'https://i.ibb.co/DCNWhXw/image3.png',
            title: 'Toilet Installation & Repair',
            desc: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.'
        },
        {
            img: 'https://i.ibb.co/QNv7649/image1.png',
            title: 'Plumbing Design',
            desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
        },
        {
            img: 'https://i.ibb.co/b5TyhtP/image2.png',
            title: 'Water Heating & Cooling',
            desc: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
        },
        {
            img: 'https://i.ibb.co/DCNWhXw/image3.png',
            title: 'Toilet Installation & Repair',
            desc: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.'
      },
      {
          img: 'https://i.ibb.co/QNv7649/image1.png',
          title: 'Plumbing Design',
          desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
      },
      {
          img: 'https://i.ibb.co/b5TyhtP/image2.png',
          title: 'Water Heating & Cooling',
          desc: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
      },
      {
          img: 'https://i.ibb.co/DCNWhXw/image3.png',
          title: 'Toilet Installation & Repair',
          desc: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.'
      },
      {
          img: 'https://i.ibb.co/QNv7649/image1.png',
          title: 'Plumbing Design',
          desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
      },
      {
          img: 'https://i.ibb.co/b5TyhtP/image2.png',
          title: 'Water Heating & Cooling',
          desc: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
      },
      {
          img: 'https://i.ibb.co/DCNWhXw/image3.png',
          title: 'Toilet Installation & Repair',
          desc: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.'
      },
      {
          img: 'https://i.ibb.co/QNv7649/image1.png',
          title: 'Plumbing Design',
          desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
      },
      {
          img: 'https://i.ibb.co/b5TyhtP/image2.png',
          title: 'Water Heating & Cooling',
          desc: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
      },
      {
          img: 'https://i.ibb.co/DCNWhXw/image3.png',
          title: 'Toilet Installation & Repair',
          desc: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.'
      },
      {
          img: 'https://i.ibb.co/QNv7649/image1.png',
          title: 'Plumbing Design',
          desc: 'Let us design or remodel your bathroom or kitchen. Even the all-powerful Pointing has no control.'
      },
      {
          img: 'https://i.ibb.co/b5TyhtP/image2.png',
          title: 'Water Heating & Cooling',
          desc: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
      },
      {
          img: 'https://i.ibb.co/DCNWhXw/image3.png',
          title: 'Toilet Installation & Repair',
          desc: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.'
      },
  ]
  
  return (
    <>
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