import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Video = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <>
        <main className="md:p-10 p-5">
            <div data-aos = "fade-up" className="text-center">
                <h2 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">VIDEO TOUR</h2>
                <h2 className="font-bold uppercase md:text-[42px] text-3xl mb-5">Take a video tour in our work</h2>
                <div className="flex justify-center items-center">
                    <p className="max-w-[830px] text-base leading-[30px]">We offer a wide range of plumbing services catered to both residential and
                        commercial clients. Even the
                        all-powerful Pointing has no control about the blind texts.</p>
                </div>

            </div>
            <div data-aos = "fade-left" className="md:mt-[60px] mt-[40px]">
                <iframe
                    title="Video"
                    className="md:w-[855px] w-auto md:h-[481px] m-auto"
                    src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
                    allowFullScreen
                />
            </div>
        </main>
    </>
  )
}

export default Video