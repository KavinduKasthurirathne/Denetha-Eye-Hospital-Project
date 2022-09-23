import React, { useState } from "react";
import '../App.css';
import './Receptionist/Reception.css';
import SearchBar from "./Receptionist/PatientSearch";
import { AppointType } from './Receptionist/AppointType';
import { Appoinment } from './Appoinment';

export const Reception = () => {

    const [NewAppoinment, setNewAppoinment] = useState(false);
    const [selectedName, setSelectedName] = useState("");
    const [selectedPhone, setSelectedPhone] = useState("");
    const [AppoinmentType, setAppoinmentType] = useState("");



    return (

            <div>
                {!NewAppoinment?<div>
                    <h1 id='leftText'>Reception</h1>
                    
                    <SearchBar selectedName={selectedName} 
                               setSelectedName={setSelectedName} 
                               selectedPhone={selectedPhone} 
                               setSelectedPhone={setSelectedPhone}/>
                    
                    {/* <button className='button' id='PatientSearch'>Patient Search &nbsp; <i class="fas fa-search"></i></button> */}
                    
                    <a href="/AddPatientForm"> <button className='button' id='newPatient' >Add New Patient &nbsp; <i className="fas fa-plus-circle"></i></button> </a>
                    
                    <AppointType btnsetter={setNewAppoinment} btnstate={NewAppoinment} type={setAppoinmentType}/>
                    
                </div> : <Appoinment name={selectedName} phone={selectedPhone} type={AppoinmentType}/>
                }
                
                
                          
                    
            </div>
    );
    
}
