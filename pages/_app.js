import '@/styles/globals.css'
import {Provider} from 'react-redux'
import {store} from '../store'
import Head from "next/head"
import NProgress from "nprogress"
import Router from "next/router"

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()



export default function App({ Component, pageProps }) {
  
  return (
    
    <>
      <Head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Provider store = {store}>
        <Component {...pageProps} />
      </Provider>
    </>
  ) 
}
