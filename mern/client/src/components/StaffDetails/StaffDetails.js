
import React from 'react';
import './StaffDetails.css';

function directMeetings(){
    <a href='MeetingDetails.js'></a>
}

const StaffDetails = () => {
    return(
        <div class = "staffDetails">
            <h2 class = "topic1">Staff Details</h2>
            <div className='SearchBar'>
                <ul>
                    <li>
                        <input  type="text" 
                                className = "search" 
                                placeholder="search"/>Search
                    </li>
                    <li>
                        <button 
                            className="btnAdd"
                            onclick = {''}>
                            Add
                        </button>
                    </li>
                </ul>
            </div>

               
                

            <table class="stafftable">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Job Status</th>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type = "button"><a href = "Profile.js">view</a></button> </td>
                </tr>
            </table>
        </div>
    );
};

export default StaffDetails;