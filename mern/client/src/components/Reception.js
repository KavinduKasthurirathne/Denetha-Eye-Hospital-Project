import {React} from 'react';
import '../App.css';
import './Receptionist/Reception.css';
import SearchBar from "./Receptionist/PatientSearch";

export const Reception = () => {

  
    
    return (

            <div>
                <h1 id='leftText'>Reception</h1>
            
                <SearchBar placeholder="Enter patient name..." />
                
                {/* <button className='button' id='PatientSearch'>Patient Search &nbsp; <i class="fas fa-search"></i></button> */}
                
                <a href="/AddPatientForm"> <button className='button' id='newPatient' >Add New Patient &nbsp; <i className="fas fa-plus-circle"></i></button> </a>
                
        
                          
                    
            </div>
    );
    
}
