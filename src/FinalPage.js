import React from 'react'
import Sourcedetails from './Bannerinfo'
import Biddetails from './Biddetails'
import{useHistory} from 'react-router-dom'
import './final.css'
function FinalPage({data,setData}) {
    let history = useHistory()
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert("submitted successfully")
        history.push("/")
        setData('')
    }
    return (
        <div className="final">
            <div className="banner__top">
                <p className="banner__text">Place your Bid(4/4 step) </p>
            </div>
            <Sourcedetails data={data} setData={data} />
            <Biddetails data={data} setData={data} />
            <div className="final__button">
            <button type="submit" onClick={handlesubmit} className="final__btn">submit</button>
            </div>
            
        </div>
    )
}

export default FinalPage
