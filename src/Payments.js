import React from 'react'
import PaymentBanner from './Bannertwo'

function Payments({data,setData}) {
    
    return (
        <div>
            <PaymentBanner data={data} setData={setData} />
        </div>
    )
}

export default Payments

