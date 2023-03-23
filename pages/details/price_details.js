import React from 'react'
import Layout from '../../components/Layout'
import PriceDetail from '@/components/Service/PriceDetails'
import Clients from '../../components/Service/Clients'
import Subscribe from '../../components/About/Subscribe'

const PriceDetails = () => {
  return (
    <>
        <Layout>
            <PriceDetail/>
            <Clients/>
            <Subscribe/>
        </Layout>
    </>
  )
}

export default PriceDetails