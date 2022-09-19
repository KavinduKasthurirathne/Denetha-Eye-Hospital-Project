import React from 'react';
import {Header} from './Header.js';
function App(){
    return(
        <div class = "MeetingDetails">
            <div class = "block1">
                <a href="StaffDetails.js">
                    <Button> Staff Details </Button>
                </a>
                <h1>Meeting Timetable</h1>
                <a href="">
                    <Button> Download </Button>
                </a>
            </div> 

        <h2></h2>
            

            <table>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Host</th>
                    <th>Description</th>
                </tr>
                
            </table>
            
        </div>
    );
}