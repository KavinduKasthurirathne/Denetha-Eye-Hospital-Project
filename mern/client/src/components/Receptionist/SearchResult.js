import {React} from 'react';
import './Reception.css';

export const SearchResult = (props) => {

    const clearPatient = () => {
        props.setName("");
        props.setPhone("");
      };
    
    return(<>
        <div className="patientdetails">Patient Name : {props.Pname}<br />
        <i className="fas fa-phone"> </i> : {props.Pno}
        { (props.Pname!=="" && props.Pno!=="" )? 
            <button className='button' id='Clearbtn' onClick={clearPatient}><i className="far fa-trash-alt"></i></button> : null
        }
      </div>
     
      
        
    </>
    )
}