import React from 'react'
import './Banner.css'
import Details from './Details.js'

function Banner({data ,setData}) {
    return (
        <div className="banner">
            <div className="banner__top">
                <p className="banner__text">Place your Bid(1/4 step) </p>
            </div>
        <Details data={data} setData={setData} />
        </div>
    )
}

export default Banner