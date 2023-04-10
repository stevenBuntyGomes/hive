import React, {useEffect, useState} from 'react'
import Layout from '../../../components/Layout'
import PriceDetail from '@/components/Service/PriceDetails'
import Clients from '../../../components/Service/Clients'
import Subscribe from '../../../components/About/Subscribe'
import { withRouter } from 'next/router'

const PriceDetails = ({query}) => {
  useEffect(() => {
    // console.log(props.router.query.price);
  }, []);
  return (
    <>
        <Layout>
            <PriceDetail priceId = {query.id}/>
            <Clients/>
            <Subscribe/>
        </Layout>
    </>
  )
}

PriceDetails.getInitialProps = async ({query}) => { 
    // const config = {
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //     },
    // };
    // console.log(query.slug);
    // const {data} = await axios.post(`${API}/blog/blog/${query.slug}`, config);
    return {
        // blog: data.blog,
        query: query
    }
}



export default withRouter(PriceDetails)