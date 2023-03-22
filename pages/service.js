import React from 'react'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer/Footer'
import ServiceItem from '@/components/Service/ServiceItem'

const Services = () => {

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
        <div className='md:w-[1440px] md:m-auto'>
          
          <div className='my-10'>

            <div className='flex flex-row flex-wrap justify-center'>
              {contents && contents.map((content, index) => (
                <ServiceItem className="w-1/3" content={content} index={index} />
              ))}
            </div>

            <Footer />
        
             </div>
          </div>
        </Layout>
    </>
  )
}

export default Services