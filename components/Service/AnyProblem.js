import React from 'react'

const AnyProblem = () => {
    const onClick = () => {

    }
  return (
    <>
        <main className='bg-slate-50 p-10'>
            <div
                className="text-center md:text-left w-full md:h-[623px] bg-[url('/problem.png')] bg-no-repeat bg-cover mx-auto text-gray-800 relative md:text-left md:p-20">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-2/5 px-10 mb-10 md:mb-0">
                        <div className="">
                            <img src="/worker.png"
                                className="md:w-[435px] w-[265px] md:h-[548px] h-[348px] m-auto md:absolute  bottom-0" alt=""/>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 px-10">
                        <div className="md:mt-28 mt-10 px-10">
                            <h5 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">CALL: 012-345-6789</h5>
                            <h4 className="font-bold uppercase md:text-[42px] text-4xl mb-5">HAVE ANY PROBLEMS?</h4>
                            <p className="">We offer a wide range of plumbing services catered to both residential and commercial
                                clients. Even the all-powerful Pointing has no control about the blind texts.</p>
                            <div className="pt-10 q-gutter-md">
                                <button className="bg-black hover:bg-orange-500 text-white font-medium py-2 px-5 rounded-md mr-3" onClick={onClick}>
                                    Contact Us
                                </button>
                                <button className="bg-black hover:bg-orange-500 hover:text-white text-white font-medium py-2 px-5 rounded-md" onClick={onClick}>
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default AnyProblem