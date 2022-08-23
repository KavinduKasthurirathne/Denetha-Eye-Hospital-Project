import React from 'react';
import './Profile.css';

function App() {
  return (
    <div >
      <table>
        <tr>
          <th>ID : </th>
          <td><input type = "textbox" placeholder = "S001" /></td>
        </tr>
        <tr>
          <th>Name : </th>
          <td><input type = "textbox" placeholder = "Savindee Hasara" /></td>
        </tr>
        <tr>
          <th>Job role : </th>
          <td><input type = "textbox" placeholder = "Manager" /></td>
        </tr>
        <tr>
          <th>Contact No :</th>
          <td><input type = "textbox" placeholder = "075236589" /></td>
        </tr>
        <tr>
          <th>Address : </th>
          <td><input type = "textbox" placeholder = "90/B , Pamunuwa , Maharagama" /></td>
        </tr>
        <tr>
          <th>Email : </th>
          <td><input type = "textbox" placeholder = "savindee@gmail.com" /></td>
        </tr>
        <tr>
          <th>Date of Birth : </th>
          <td><input type = "textbox" placeholder = "1990-08-15" /></td>
        </tr>
        <tr>
          <th>Basic Salary : </th>
          <td><input type = "textbox" placeholder = "30000.00" /></td>
        </tr>
        
      </table>
    </div>
    
  );
}

export default Profile;
