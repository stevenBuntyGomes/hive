import React from 'react'
import Layout from '../../components/Layout'
import ServiceDetail from '../../components/Service/ServiceDetails'
import Clients from '../../components/Service/Clients'
import Subscribe from '../../components/About/Subscribe'
import { withRouter } from 'next/router'

const ServiceDetails = (props) => {
  return (
    <>
        <Layout>
            <ServiceDetail serviceId = {props.router.query.service}/>
            <Clients/>
            <Subscribe/>
        </Layout>
    </>
  )
}

export default withRouter(ServiceDetails)