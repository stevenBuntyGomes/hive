import React from 'react'
import Layout from '../components/Layout'
import PrizeItem from '../components/Service/PrizeItem'

const Services = () => {

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
  
  return (
    <>
        <Layout>
        <div className='md:w-[1440px] md:m-auto'>
            <main className="bg-slate-50 p-10">
                <div className="text-center mb-10">
                    <h2 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">Our Services PRICES</h2>
                    <h2 className="font-bold uppercase md:text-[42px] text-4xl mb-5">Quality Service WITH STANDARD PRICES</h2>
                    <div className="flex justify-center items-center">
                        <p className="max-w-[830px]">We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts..</p>
                    </div>
                </div>
                

                <div className='flex flex-row flex-wrap justify-center'>
                {contents && contents.map((content, index) => (
                    <PrizeItem content={content} index={index} key={index} />
                ))}
                </div>
            </main>
          </div>
        </Layout>
    </>
  )
}

export default Services