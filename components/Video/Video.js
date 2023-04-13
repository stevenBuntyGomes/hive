import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import { getVideoAction } from '@/Action/VideoLinkAction';
import parse from 'html-react-parser';

const Video = () => {
    const dispatch = useDispatch();
    const { video } = useSelector((state) => state.video);
    const fetchVideoHandler = async () => {
        dispatch(getVideoAction());
    }
    useEffect(() => {
        fetchVideoHandler();
        Aos.init({duration: 1000});
    }, []);
  return (
    <>
        <main className="md:p-10 p-5">
            <div data-aos = "fade-up" className="text-center">
                <h2 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">{video && video.heading}</h2>
                <h2 className="font-bold uppercase md:text-[42px] text-3xl mb-5">{video && video.title}</h2>
                <div className="flex justify-center items-center">
                    <div className="max-w-[830px] text-base leading-[30px]">{parse(`${video && video.description}`)}</div>
                </div>

            </div>
            <div data-aos = "fade-up" className="md:mt-[60px] mt-[40px]">
                <iframe
                    title="Video"
                    className="md:w-[855px] w-auto md:h-[481px] m-auto"
                    src={video && video.youtube_link}
                    allowFullScreen
                />
            </div>
        </main>
    </>
  )
}

export default Video