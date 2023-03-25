import React, {Fragment} from 'react'
import Header2 from './Header/Header2'
import Footer from '../components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <Fragment>
        <Header2/>
        <div>
          {children}
        </div>
        <Footer/>
    </Fragment>
  )
}

export default Layout