import React,{useState} from 'react'
import './details.css'
import { Link } from 'react-router-dom'; 
import { useFormik } from 'formik';
import * as Yup from 'yup'
function Details({data ,setData}) {
    const onUpdate = (event,index) => {
        
        const val={...data};
        val[event.target.name] = event.target.value
        setData(val)
    }
    const onchange= async(ev)=>{
        
        data.entercartype=ev.target.value
    }
    const onSubmit = (event)=>{
        event.preventDefault()
        setData('')

      
    }
   
        const formik = useFormik({
            initialValues:{
                sourcelocation:'',
                destination:'',
                entercartype:'',
                numberoftravellers:''
            },
            validationSchema: Yup.object({
                sourcelocation: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                destination: Yup.string()
                  .max(20, 'Must be 20 characters or less')
                  .required('Required'),
                entercartype: Yup.string().email('inavalid').required('Required'),
                numberoftravellers: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .required('Required'),
              }),
        })



    return (
        <div className="details">
           
           
                <form className="details__form" onSubmit={onSubmit}  action="/Payments" >
                <div className="details__top div">
                    <div >
                        <label htmlFor="sourcelocation"  className="details__label" >Source Location  *</label>
                        <input className="details__input" id="sourcelocation" name="sourcelocation"  type="text" defaultValue={data.sourcelocation}  onChange={onUpdate} required={true}
              />
                    </div>
                    <div>
                        <label htmlFor="destination" className="details__label" >Destination  *</label>
                        <input id="destination" type="text" name="destination"  className="details__input" value={data.destination} required onChange={onUpdate}
             />
                    </div>
                </div>
               <div className="div"> 
               <label htmlFor=" entercartype"  className="details__label">Enter car type *</label>
                <select className="details__input" name=" entercartype" required onChange={onchange} value={data.entercartype}>
                    <option value="HatchBack">HatchBack</option>
                    <option value="Seden">Seden</option>
                    <option value="SUV">SUV</option>
                </select>
               </div>
               <div className="div">
               <label className="details__label" htmlFor="numberoftravellers">Number of Travellers</label>
                        <input className="details__input" type="number" name="numberoftravellers" min="1" max="10"  onChange={onUpdate} value={data.numberoftravellers}/>
               </div>
               <Link to='/Payments' className="details__button">
                <button type="submit" className="details__btn"  >Enter Bid Details</button>
               </Link>
               
               </form>
            
        </div>
    )
}

export default Details
