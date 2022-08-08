import {React} from 'react';
import '../App.css';
import '../Reception.css';

export const Reception = () => {

    return (

            <div>
                
                <input className='input' id='searchBox'></input>
                <button className='button' id='PatientSearch'>Patient Search</button>
                
                <button className='button' id='newPatient'>Add New Patient +</button>
                    
                
                    
            </div>
    );
}