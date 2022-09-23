
import React from 'react';
import './Profile.css';


function Profile() {
  return (
    <div > 
      <table className='profiletable'>
        <tbody>
        <tr>
          <th>ID : </th>
          <td><input type = "textbox" placeholder = "S001" name="idNo" value="" /></td>
        </tr>
        <tr>
          <th>Name : </th>
          <td><input type = "textbox" placeholder = "Savindee Hasara" name="name" value=""/></td>
        </tr>
        <tr>
          <th>Job role : </th>
          <td><input type = "textbox" placeholder = "Manager" name="jobrole" value=""/></td>
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

      <input type = "button" id = "btnedit" name="btnedit" value="Edit"/>
      
    </div>
    
  );
}

export default Profile;
