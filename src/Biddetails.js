import React from 'react'
import "./Biddetails.css"

function Biddetails({data}) {
    return (
        <div className="bid">
            <p  className="bid__title">Bid Details</p>
            <div className="bid__bottom">
                <div className="bid__details">
                <p>{data.phonenumber}</p>
                <p>{data.enteryourname}</p>
                <p>{data.enterremarks}</p>
                </div>
                <div>
                    <div className="bid__cost">
                        <span >₹</span> 
                        <span>{data.cost}</span>
                    </div>
                    <p className="bid__fix">Fixed Price</p>

                </div>
                
                
            </div> 
        </div>
       
    )
}

export default Biddetails
