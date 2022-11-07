import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
  } from "@mui/material";


 

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

    const Record = (props) => {

    const [deleteMeeting, setDeleteMeeting] = useState(false);
    return(
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.phone}</td>
        <td>{props.record.type}</td>
        <td>{props.record.age}</td>
        <td>{props.record.date}</td>
        <td>{props.record.doctor}</td>
        <td>Rs.{props.record.amount}</td>
        <td><button className="button"  onClick={() => {
                        setDeleteMeeting(true)
            //  if (window.confirm("Are you sure you want to delete?") === true) {
            //     props.deleteRecord(props.record._id);
            //   } 
                }}><i className="fas fa-trash-alt"></i></button></td>

        <Dialog
        open={deleteMeeting}
        onClose={() => setDeleteMeeting(false)}
        >
            
        <DialogTitle id="dialog-title">Delete Warning!</DialogTitle>
        <DialogContent>Are you sure you want to delete this receipt?</DialogContent>
        <DialogActions>
          <Box sx={{ m: 2, position: "relative" }}>
            <Button
              variant="contained"
              onClick={() => {
                props.deleteRecord(props.record._id);
                setDeleteMeeting(false);
              }}
              autoFocus
              color="secondary"
            >
              Delete
            </Button>
          </Box>
        </DialogActions>
        </Dialog>
            {/* <td><button className="button"  onClick={() => {
                 props.btnsetter(!props.btnstate);
                 props.Idsetter(props.record._id);   

                    }}><i className="fas fa-pen"></i></button></td> */}
        </tr>
         )
    };
   
   
    return (
        <>
        <br/>
        <center><h2>Receipts</h2></center>
        <div id="receiptstable">
            <table>
                <thead>
                    <tr id="patientTh">
                        <th id="patientTh">Patient Name</th>
                        <th id="patientTh">Phone Number</th>
                        <th id="patientTh">Type</th>
                        <th id="patientTh">Age</th>
                        <th id="patientTh">Date</th>
                        <th id="patientTh">Doctor</th>
                        <th id="patientTh">Amount</th>
                        
                    </tr>
                </thead>

                <tbody id="patientTd">
                    {recordList()}
                </tbody>
            </table>
        </div>
        </>
        );
}  