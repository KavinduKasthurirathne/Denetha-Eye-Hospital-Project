import {React} from 'react';
import '../App.css';
import '../Reception.css';

export const Reception = () => {

    return (

            <div>
                <h1 id='leftText'>Reception</h1>
                
                <input className='input' id='searchBox'></input>
                <button className='button' id='PatientSearch'>Patient Search</button>
                
                <button className='button' id='newPatient'>Add New Patient &nbsp; <i class="fas fa-plus-circle"></i></button> 
                <br/><br/><br/><br/>
                <p id='leftText'>Patient Name :<br/><br/>
                <i class="fas fa-phone"> :</i>
                </p>
                          
                    
            </div>
    );
}