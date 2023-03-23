import React from 'react'

const Video = () => {
  return (
    <>
        <main className="p-10">
            <div className="text-center">
                <h2 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">VIDEO TOUR</h2>
                <h2 className="font-bold uppercase md:text-[42px] text-3xl mb-5">Take a video tour in our work</h2>
                <div className="flex justify-center items-center">
                    <p className="max-w-[830px] text-base leading-[30px]">We offer a wide range of plumbing services catered to both residential and
                        commercial clients. Even the
                        all-powerful Pointing has no control about the blind texts.</p>
                </div>

            </div>
            <div className="mt-[60px]">
                <iframe
                    title="Quasar to React/Tailwind Conversion"
                    className="md:w-[855px] md:h-[481px] m-auto"
                    src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
                    allowFullScreen
                />
            </div>
        </main>
    </>
  )
}

export default Video