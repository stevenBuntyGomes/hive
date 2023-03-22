import React from 'react'

const Video = () => {
  return (
    <>
        <main class="p-10">
            <div class="text-center">
                <h2 class="text-orange-500 uppercase font-bold text-[32px] pb-3">VIDEO TOUR</h2>
                <h2 class="font-bold uppercase text-[42px] mb-5">Take a video tour in our work</h2>
                <div class="flex justify-center items-center">
                    <p class="max-w-[830px]">We offer a wide range of plumbing services catered to both residential and
                        commercial clients. Even the
                        all-powerful Pointing has no control about the blind texts.</p>
                </div>

            </div>
            <div class="py-20">
                <div class="">
                    <iframe
                        title="Quasar to React/Tailwind Conversion"
                        className="md:w-[855px] md:h-[481px] m-auto"
                        src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
                        allowFullScreen
                    />
                </div>
            </div>
        </main>
    </>
  )
}

export default Video