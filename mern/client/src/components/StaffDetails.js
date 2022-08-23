import React from 'react';
function App(){
    return(
        <div class = "staffDetails">
            <h2>Staff Details</h2>
            <input type = "button" id = "SDB1">Meetings</input>
            
            <input type = "text" placeholder="Search"></input> 
            <input type = "button" id = "SDB2" >ADD</input>
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
}