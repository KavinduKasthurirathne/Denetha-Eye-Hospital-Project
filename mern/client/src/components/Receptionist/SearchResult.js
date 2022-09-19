import {React} from 'react';

export const SearchResult = (props) => {



    return(
        <div className="patientdetails">Patient Name : {props.Pname}<br /><br />
        <i className="fas fa-phone"> </i> : {props.Pno}
      </div>
      
    )

}