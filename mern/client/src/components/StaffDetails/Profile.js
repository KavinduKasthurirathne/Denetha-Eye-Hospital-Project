import { useNavigate } from 'react-router-dom';
import './Profile.css';
import axios from 'axios';
import React , {useState,useEffect} from "react";
import {useCookies} from 'react-cookie';

function Profile(props) {

  const [Profilerecords, setProfileRecords] = useState([]);
  const [cookies] = useCookies('id');
  
  const navigate = useNavigate();

      // This method fetches the records from the database.
    useEffect(() => {
      async function getProfile() {
          const response = await fetch(`http://localhost:5000/api/meeting/`);
      
          if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              window.alert(message);
              return;
          }
      
          const Profilerecords = await response.json();
          setProfileRecords(Profilerecords);
      }
      
      getProfile();
      
      return;
      }, [Profilerecords.length]);



  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/api/profile/delete/${id}`, {
    method: "DELETE"
    });

    const newRecords = Profilerecords.filter((el) => el._id !== id);
    
    setProfileRecords(newRecords);
    window.alert("Profile deleted");
  }


  return (

    <div className='ProfilePage'> 
      <table className='profiletable'>
        <tbody>
        <tr>
          <th>ID : </th>
          <td><input readOnly type = "textbox" placeholder = "S001" name="idNo" value="" /></td>
        </tr>
        <tr>
          <th>Name : </th>
          <td><input readOnly type = "textbox" placeholder = "Savindee Hasara" name="name" value=""/></td>
        </tr>
        <tr>
          <th>Job role : </th>
          <td><input readOnly type = "textbox" placeholder = "Manager" name="jobrole" value=""/></td>
        </tr>
        <tr>
          <th>Contact No :</th>
          <td><input type = "textbox" placeholder = "075236589" name="contactno" value="" /></td>
        </tr>
        <tr>
          <th>Address : </th>
          <td><input type = "textbox" placeholder = "90/B , Pamunuwa , Maharagama" name="address" value=""/></td>
        </tr>
        <tr>
          <th>Email : </th>
          <td><input type = "textbox" placeholder = "savindee@gmail.com" name="email" value=""/></td>
        </tr>
        <tr>
          <th>Date of Birth : </th>
          <td><input type = "textbox" placeholder = "1990-08-15" name="bob" value=""/></td>
        </tr>
        <tr>
          <th>Basic Salary : </th>
          <td><input type = "textbox" placeholder = "30000.00" name="basicsal" value=""/></td>
        </tr>
        </tbody>
        
        
      </table>

      <button 
        className = "btnedit"  
        >
          Edit
      </button>

      <button
        className="btnRemove" 
        onClick={() => {
          props.deleteRecord(cookies.id);
        }}
        >
          Remove
      </button>
      
    </div>
    
  );
}

export default Profile;
