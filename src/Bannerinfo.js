import React from 'react'
import './Banner.css'
import EditIcon from '@material-ui/icons/Edit';
function Bannerinfo({data}) {
    return (
        <div className="banner__bottom">
                <div className="banner__info">
                    <p className="banner__textt">Journey Details</p> 
                    <div className="banner__icon">
                        <EditIcon />
                        <p>Edit</p>
                    </div>
                </div>
                    <div className="banner__loc">
                             <p>
                                 {data.sourcelocation}
                             </p>
                             <span>-</span>
                             <p>
                             {data.destination}
                             </p>
                    </div>
                         <div className="banner__person">
                             <p>{data.numberoftravellers} persons ,</p>
                             <p>{data.entercartype}</p>
                         </div>

                </div>
    )
}

export default Bannerinfo
