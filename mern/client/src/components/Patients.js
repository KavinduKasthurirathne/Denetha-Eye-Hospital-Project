import '../Patients.css';
import '../App.css';
import React, {useState, useEffect} from "react";


const eyeicon = require('../image/eye.png');
const Record = (props) => (
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.phone}</td>
        <td></td>
    </tr>
);

export const Patients = () => {
    const [records, setRecords] = useState([]);

    //This method fetches the records from the database
    useEffect(() => {
        async function getRecords() {
            const response = await fetch("http://localhost:5000/api/patient/get");

            if(!response.ok) {
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

    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record = {record}
                    //deleteRecord = {() => deleteRecord(record._id)}
                    key = {record._id}
                />
            );
        });
    }


    function viewProfile(e) {
        alert("Clicked!")
    };

    return (
        <>
        <div class='patienttable'>
            <table class='table1'>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {recordList()}
                </tbody>
            </table>
        </div>
        </>
    );
}