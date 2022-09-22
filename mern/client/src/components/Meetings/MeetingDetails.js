
import React from 'react';
import './MeetingDetails.css';

function Meetings(){
    return(
        <div className="mainmeetings">
            <div className='meetingheader'>
                <h2 className="meetingtopic">Meeting Time Table</h2>
                <button
                    className='btndownload'
                    onClick={''}>
                        Download
                </button>
            </div>


            <table className='meetingtable'>
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

export default Meetings;