import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';


const Record = (props) => (
       
        <tr>
            <td>{props.record.name}</td>
            <td>{props.record.phone}</td>
            <td>{props.record.type}</td>
            <td>{props.record.age}</td>
            <td>{props.record.date}</td>
            <td>{props.record.doctor}</td>
            <td>{props.record.amount}</td>
            <td><button className="button"  onClick={() => {
                 if (window.confirm("Confirm Delete") === true) {
                    props.deleteRecord(props.record._id);
                  } 
                    
                    }}><i className="far fa-trash-alt"></i></button></td>
        </tr>
        
     );
 

export const ViewAllReceipts = () => {

    

    const [records, setRecords] = useState([]);
    const navigateTo = useNavigate();

    //This method read the all receipts from the database
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/api/receipt/viewAll`);

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

    async function deleteRecord(id) {
        await fetch(`http://localhost:5000/api/receipt/delete/${id}`, {
          method: "DELETE"
        });
      
        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
      }

    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record = {record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            );
        });
    }

//  
   
   
    return (
        <>
        <br/>
        <center><h2>Receipts</h2></center>
        <div id="receiptstable">
            <table>
                <thead>
                    <tr>
                        <th id="receiptsTable">Patient Name</th>
                        <th id="receiptsTable">Phone Number</th>
                        <th id="receiptsTable">Type</th>
                        <th id="receiptsTable">Age</th>
                        <th id="receiptsTable">Date</th>
                        <th id="receiptsTable">Doctor</th>
                        <th id="receiptsTable">Amount(Rs.)</th>
                        
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