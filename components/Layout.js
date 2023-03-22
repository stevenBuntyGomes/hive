import React, {Fragment} from 'react'
import Header from './Header/Header'
import Header2 from './Header/Header2'
import Footer from '../components/Footer/Footer'
// import mainBodyCss from './component.module.css'

const Layout = ({children}) => {
  return (
    <Fragment>
        <Header2/>
        <div>
          {children}
        </div>
        <Footer/>
        {/* <p>footer</p> */}
    </Fragment>
  )
}

export default Layout