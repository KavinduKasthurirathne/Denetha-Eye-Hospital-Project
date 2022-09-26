import React,{useState} from "react";
import './AddMeetings.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddMeetings(props){

    const navigate = useNavigate();

    function sendMeetingDetails(event) {
        event.preventDefault();

        const newMeeting = {
            date,
            time,
            host,
            description
        }

        axios.post("http://localhost:5000/api/meeting/add" , newMeeting).then(() =>{
            alert("Meeting added Successfully!");
            navigate("/meetings");
        }).catch((err) => {
            alert(err);
        })
    }

    const [date, setDate] = useState( props.date);
    const [time , setTime] = useState(props.time);
    const [host , setHost] = useState(props.host);
    const [description , setDescription] = useState(props.description);


    const getDateString = (iso) => {
        const date = new Date(iso);
        const correctDate = new Date(date.getTime() + 360*60000);
        return (correctDate.toISOString().split('T')[0]);
    };
   
    console.log(props);

    return(
        <div className="container">
            <form className="addmeetingform" onSubmit={sendMeetingDetails}>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="Date" className="form-control" id="meetingDate" aria-describedby=""
                    onChange={(event) =>{
                        setDate(event.target.value);//assign evrytime, when changing the value
                    }}
                    value = {date}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="text" className="form-control" id="meetingTime"
                    onChange={(event) =>{
                        setTime(event.target.value);//assign evrytime, when changing the value
                    }}
                    value = {time}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="host">Host</label>
                    <input type="text" className="form-control" id="meetingHost"
                    onChange={(event) =>{
                        setHost(event.target.value);//assign evrytime, when changing the value
                    }}
                    value = {host}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="meetingdescription"
                    onChange={(event) =>{
                        setDescription(event.target.value);//assign evrytime, when changing the value
                    }}
                    value = {description}
                    />
                </div>
                
                <button type="submit" className="btn_btn-primary">Submit</button>
            </form>
        </div>
        

    );
}

export default AddMeetings;