import React from 'react';
import './StaffDetails.css';
import './AddNewMember'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from "react";

function StaffDetails () {

    const [memberRecords, setMemberRecords] = useState([]);

    // This method will map out the records on the table
    function recordMemberList() {
        return memberRecords.map((record) => {
        return (
            <Record
            record={memberRecords}
            key={memberRecords._id}
            />
        );
        });
    }

    const navigate = useNavigate();

    const AddStaffMember = () => {
        navigate('AddNewMember');
    }

    const viewProfile = () => {
  
    }

    return(
        <div class = "staffDetails">
            <h2 class = "topic1">Staff Details</h2>
            <div className='SearchBar'>
                        <input  type="text" 
                                className = "search" 
                                placeholder="search"/>
                        <button 
                            className="btnAdd"
                            onclick = {AddStaffMember}>
                            Add
                        </button>
            </div>

               
                

            <table class="stafftable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Job Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{recordMemberList()}</tbody>
            </table>
        </div>
    );
};

const Record = (props) => (
    <tr>
        <td>{(props.record.id)}</td>
        <td>{(props.record.name)}</td>
        <td>{(props.record.jobStatus)}</td>
        <td>
            <button 
                className='viewProfile'
            >View Profile</button>
        </td>
    </tr>
)

export default StaffDetails;