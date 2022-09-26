import { useNavigate } from 'react-router-dom';
import './MeetingDetails.css';
import AddMeetings from './AddMeeting.js';
import axios from 'axios';
import React , {useState,useEffect} from "react";

function Meetings(props){

    const [editDetails , setEditDetails] = useState({
        date: '',
        time:'',
        host:'',
        description:''    
    });
    const [records, setRecords] = useState([]);
 
    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/api/meeting/`);
        
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        
            const records = await response.json();
            setRecords(records);
        }
        
        getRecords();
        
        return;
        }, [records.length]);

    // This method will delete a record
    async function deleteRecord(id) {
        await fetch(`http://localhost:5000/api/meeting/delete/${id}`, {
        method: "DELETE"
    });
  
        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
        window.alert("Meeting deleted");
    }

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
        return (
            <Record
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
            setEditDetails = {setEditDetails}
            />
        );
        });
    }

    const navigate = useNavigate();

    const AddMeeting = () =>{
        navigate('add_meetings');
    };

    return(
            <div>
                <div className='meetingheader'>
                    <h2 className="meetingtopic">Meeting Time Table</h2>
                    <button
                        className='button'
                        >
                            Download
                    </button>
                    <button 
                        className='addMeeting'
                        onClick={AddMeeting}>
                            Add
                    </button>
                </div>


                <table className='meetingtable'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Host</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{recordList()}</tbody>
            </table>

            {
                editDetails.date === ''? null:
                <AddMeetings 
                date = {editDetails.date}
                time = {editDetails.time}
                host = {editDetails.host}
                description = {editDetails.description}
            />
            }

            

        </div>

    );
}



const Record = (props) => (

    <tr>
      <td>{getDateString(props.record.date)}</td>
      <td>{props.record.time}</td>
      <td>{props.record.host}</td>
      <td>{props.record.description}</td>
      <td>
      <button
            className='editMeeting'
            onClick={() => {
                props.setEditDetails({
                    date: props.record.date,
                    time: props.record.time,
                    host: props.record.host,
                    description: props.record.description    
                });
            }}>
                Edit
        </button>&nbsp;&nbsp;
        <button className="btn_btn-link"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
   );
//a function to get ISO date with correct time zone
const getDateString = (iso) => {
    const date = new Date(iso);
    const correctDate = new Date(date.getTime() + 360*60000);
    return (correctDate.toISOString().split('T')[0]);
};

export default Meetings;

