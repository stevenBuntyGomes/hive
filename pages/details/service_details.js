import React from 'react'
import Layout from '../../components/Layout'
import ServiceDetail from '../../components/Service/ServiceDetails'
import Clients from '../../components/Service/Clients'
import Subscribe from '../../components/About/Subscribe'

const ServiceDetails = () => {
  return (
    <>
        <Layout>
            <ServiceDetail/>
            <Clients/>
            <Subscribe/>
        </Layout>
    </>
  )
}

export default ServiceDetails