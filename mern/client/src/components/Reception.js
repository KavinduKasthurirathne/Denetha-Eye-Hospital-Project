import {React} from 'react';
import '../App.css';
import './Receptionist/Reception.css';
import SearchBar from "./Receptionist/PatientSearch";
import BookData from "./Receptionist/Data.json";
/*const patient = require("./server/models/PatientModel.js")*/

export const Reception = () => {

    return (

            <div>
                <h1 id='leftText'>Reception</h1>
            
                
                <SearchBar placeholder="Enter patient name..." data={BookData} />
                
                {/* <button className='button' id='PatientSearch'>Patient Search &nbsp; <i class="fas fa-search"></i></button> */}
                
                <a href="./AddPatientForm.js"> <button className='button' id='newPatient' >Add New Patient &nbsp; <i class="fas fa-plus-circle"></i></button> </a>
                
        
                          
                    
            </div>
    );
    
}
