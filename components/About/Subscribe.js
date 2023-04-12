import React, {useState, useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import { sendSubscribeAction, removeMessageAction } from '@/Action/SubscribeAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';


const Subscribe = () => {
    const dispatch = useDispatch();
    const {message} = useSelector((state) => state.subscribe);
    const [email, setEmail] = useState('');
    const [requiredMessage, setRequiredMessage] = useState('');
    const subscribeHandler = async () => {
        if(email == ''){
            setRequiredMessage('The field can not be empty');
        }else{
            await dispatch(sendSubscribeAction(email));
        }
        setEmail('');
    }

    const removeMessageHandler = async () => {
        await dispatch(removeMessageAction());
    }

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [dispatch, message]);
  return (
    <>
        <main className='bg-[#FFF] pb-10'>
            <div data-aos = "fade-up" className="text-center md:pt-10 md:pb-10 p-5 md:p-10">

                <h6 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-5">SUBSCRIBE</h6>
                <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">SUBSCRIBE For Last Updates</h5>
                <p>Subscribe our newsletter. join us and get the latest updates & patches! We do not spam will not share the
                    email to anyone.</p>
                <div className="md:flex md:justify-center md:items center md:w-full mt-5">
                    <div className="md:w-[500px]">
                        <input
                            className="border-2 border-orange-500 hover:border-blue-500 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="text"
                            type="text"
                            placeholder="Enter Email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mx-5 md:mt-0 mt-5">
                        <button className="bg-black hover:bg-orange-500 text-white font-medium py-2 px-5 rounded-md mr-3" onClick={() => subscribeHandler()}>
                            Submit
                        </button>
                    </div>
                    
                </div>
                <div className="md:mt-5 mt-5 md:max-w-[400px] mx-auto">
                        {message && (
                            <div onClick={() => removeMessageHandler()} className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 text-center shadow-md" role="alert">
                                <div className="text-center">
                                    <p className="text-sm text-center">{message} <FontAwesomeIcon icon={faXmark}/></p>
                                </div>
                            </div>
                        )}
                        {requiredMessage && (
                            <div onClick={() => setRequiredMessage('')} className="bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 text-center shadow-md" role="alert">
                                <div className="text-center">
                                    <p className="text-sm text-center">{requiredMessage} <FontAwesomeIcon icon={faXmark}/></p>
                                </div>
                            </div>
                        )}
                        
                    </div>
                
            </div>
        </main>
    </>
  )
}

export default Subscribe