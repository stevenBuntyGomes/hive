import React, {useEffect, useState} from 'react'
import Layout from '../../components/Layout'
import PriceDetail from '@/components/Service/PriceDetails'
import Clients from '../../components/Service/Clients'
import Subscribe from '../../components/About/Subscribe'
import { withRouter } from 'next/router'

const PriceDetails = (props) => {
  useEffect(() => {
    // console.log(props.router.query.price);
  }, []);
  return (
    <>
        <Layout>
            <PriceDetail priceId = {props.router.query.price}/>
            <Clients/>
            <Subscribe/>
        </Layout>
    </>
  )
}





export default withRouter(PriceDetails)