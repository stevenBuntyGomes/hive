import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import ServiceDetail from '../../../components/Service/ServiceDetails'
import Clients from '../../../components/Service/Clients'
import Subscribe from '../../../components/About/Subscribe'
import { withRouter } from 'next/router'

const ServiceDetails = ({query}) => {
  useEffect(() => {
    console.log('query id = ' + query.id);
  }, []);
  return (
    <>
        <Layout>
            <ServiceDetail serviceId = {query.id}/>
            <Clients/>
            <Subscribe/>
        </Layout>
    </>
  )
}

ServiceDetails.getInitialProps = async ({query}) => { 
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

export default withRouter(ServiceDetails)