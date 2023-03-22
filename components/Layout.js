import React, {Fragment} from 'react'
import Header from './Header/Header'
// import mainBodyCss from './component.module.css'

const Layout = ({children}) => {
  return (
    <Fragment>
        <Header/>
        <div>
          {children}
        </div>
        {/* <p>footer</p> */}
    </Fragment>
  )
}

export default Layout