import React from 'react';
import {Header} from '../Header.js';

const StaffDetails = () => {
    return(
        <div class = "staffDetails">
            <h2>Staff Details</h2>
            <input type = "button" id = "SDB1"/>
            
            <input type = "text" placeholder="Search"/>
            <input type = "button" id = "SDB2" />ADD
            <table>
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