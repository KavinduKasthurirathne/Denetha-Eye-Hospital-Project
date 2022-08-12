import { Icon } from '@mui/material';
import {React} from 'react';
import '../App.css';
import '../Reception.css';

export const Reception = () => {

    return (

            <div>
                
                <input className='input' id='searchBox'></input>
                <button className='button' id='PatientSearch'>Patient Search</button>
                
                <button className='button' id='newPatient'>Add New Patient &nbsp; <i class="fas fa-plus-circle"></i></button>               
                    
            </div>
    );
}