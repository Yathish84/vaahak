import React from 'react'
import "./Biddetails.css"
import EditIcon from '@material-ui/icons/Edit';
import { useHistory  } from 'react-router-dom'

function Verify({data,setData}) {
    let history = useHistory()
    function maxLengthCheck(event)
  {
    if (event.target.value.length > event.target.maxLength)
      event.target.value = event.target.value.slice(0, event.target.maxLength)
  }
  const onUpdate = (event,index) => {
    
    if(event.target.value==="1234"){
        console.log("ffff")

       history.push('/final')
    }
  }
  
    return (
        <div className="verify">
            <div className="verify__top">
                <p className="verify__text">We've sent an OTP to your mobile number,Please enter it below to submit your bid {data.phonenumber} <EditIcon className="verify__icon" /><span className="verify__edit">Edit</span></p>
            </div>
            <div className="verify__bottom">
                <div className="verify__input">
                    <input className="verify__otptext" value={data.otpdata} maxLength="4" min="1" name="otpdata" type="number" onInput={maxLengthCheck} onChange={onUpdate} />
                    
                </div>
                <div className="verify__buttons">
                    <button className="verify__btn white">
                        Resend OTP Again
                    </button>
                    <button type="submit"  className="verify__btn blue">
                        Verify via OTP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Verify
