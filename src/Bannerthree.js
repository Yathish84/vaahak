import React from 'react'
import './Banner.css'
import Bannerinfo from './Bannerinfo'
import Biddetails from './Biddetails'
import Verify from './Verify';
function Bannerthree({data,setData}) {
    return (
        <div className="banner">

            <div className="banner__top">
                <p className="banner__text">Place your Bid(3/4 step) </p>
            </div>
            <Bannerinfo data={data} />
            <Biddetails data={data} />
            <Verify data={data} setData={setData}/>
        </div>
    )
}

export default Bannerthree
