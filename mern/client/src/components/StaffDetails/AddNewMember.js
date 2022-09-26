import './AddNewMember.css';
import axios from 'axios';
import React,{useState} from "react";

function AddNewMember(props){

    function sendStaffDetails(event) {
        event.preventDefault();

        const newMember = {
            id,
            name,
            jobStatus
        }

        axios.post("http://localhost:5000/api/staff/add" , newMember).then(() =>{
            alert("New Member added Successfully!");
        }).catch((err) => {
            alert(err);
        })
    }

    const [id, setId] = useState( props.id);
    const [name , setName] = useState(props.name);
    const [jobStatus , setJobStatus] = useState(props.jobStatus);
   
    return(
        <div className="container">
            <form className="addmemberform" onSubmit={sendStaffDetails}>
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input type="text" className="form-control" id="memberId" aria-describedby=""
                    onChange={(event) =>{
                        setId(event.target.value);//assign evrytime, when changing the value
                    }}
                    value = {id}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="memberName"
                    onChange={(event) =>{
                        setName(event.target.value);//assign evrytime, when changing the value
                    }}
                    value = {name}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="jobStatus">Job Status</label>
                    <input type="text" className="form-control" id="jobStatus"
                    onChange={(event) =>{
                        setJobStatus(event.target.value);//assign evrytime, when changing the value
                    }}
                    value = {jobStatus}
                    />
                </div>

                <button type="submit" className="btn_btn-primary">Submit</button>
            </form>
        </div>
        

    );
}

export default AddNewMember;