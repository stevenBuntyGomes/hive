import React, {Fragment} from 'react'
import Header from './Header/Header'
import Header2 from './Header/Header2'
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