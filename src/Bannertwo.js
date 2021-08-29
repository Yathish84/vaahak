import React,{useState} from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'; 
import Bannerinfo from './Bannerinfo'

function Bannertwo({data,setData}) {
    const onUpdate = (event,index) => {
        event.preventDefault();
        const val={...data};
        val[event.target.name] = event.target.value
        setData(val)
    }
    
    const[check,setCheck]=useState(false)
    const[disable,setDisable]=useState(true)
    const[enable,setEnable]=useState(false)
    const handlecheck=()=>{
       setCheck(true)
        setDisable(false)
        
    }
    const enablediv =()=>{
        setEnable(true)
    }
    
     
    return (
        <div className="banner">
            <div className="banner__top">
                <p className="banner__text">Place your Bid(2/4 step) </p>
            </div>
            <Bannerinfo data={data} />
                <div className="banner__cost">
                    <div className="banner__rs">
                    <span>₹</span>                        
                    <input type="text" name="cost" value={data.cost} onChange={onUpdate} placeholder="0" />
                    </div>
                    <div className="banner__checkbox">
                    <input type="checkbox"   onClick={handlecheck} />
                    <label htmlFor="Rate Negoitable" className="banner">Rate Negoitable</label>
                    </div>
                   {!enable &&(
                       <button className="banner__btn" disabled={disable} onClick={enablediv} >Next</button>
                   )}
                    
                </div>
                <div>
                    {enable &&(
                    <form className="banner__form"  >
                        <div >
                        <label htmlFor="phonenumber"  className="banner__label" >Enter your 10 digits Mobile number</label>
                        <input className="banner__input" placeholder="+91-" name="phonenumber"  type="tel" pattern="+91-[0-9]{10}"  required onChange={onUpdate}
                            />
                    </div>
                    <div className="banner__update">
                        <input type="checkbox" name="chec" id="" checked />
                        <label htmlFor="chec" className="banner__labe">Get Updates on </label>
                        <img className="banner__img" src="./images/download.jpg" />
                        <span>WhatsApp</span>
                        
                    </div>
                    <div>
                        <label htmlFor="entername" className="banner__label" >Enter your Name*</label>
                        <input id="entername" type="text" name="enteryourname"  className="banner__input" value={data.enteryourname} required onChange={onUpdate}
                        />
                    </div>
                    <div>
                        <label htmlFor="destination" className="banner__label" >Enter Remarks(optional)</label>
                        <input id="destination" type="text" name="enterremarks"  className="banner__input" value={data.enterremarks} required onChange={onUpdate}
                        />
                    </div>
                    <Link to="/verify" className="banner__buttonn">
                    <button className="banner__btnn">Verify Via OTP</button>
                    </Link>
            </form>
                     ) }
        </div> 
        </div> 
        
    )}

export default Bannertwo
