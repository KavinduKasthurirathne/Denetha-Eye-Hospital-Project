import {React} from 'react';
import '../AddPatientForm.css';
import '../App.css';

export const AddPatientForm = () => {

    return (
        <>

        <div class='addformpatienttable'>
            <p class='denethahead'><u><b>Denetha Eye Hospital</b></u></p>
            <p class='addformhead'><u><b>Add New Patient</b></u></p>

            <form class='addform'>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" required></input> <br></br>

                <label for="age">Age: </label>
                <input type="text" id="age" name="age" required></input> <br></br>

                <label for="gender">Gender (M/F): </label>
                <input type="text" id="gender" name="gender" required></input> <br></br>

                <label for="dob">Date of Birth: </label>
                <input type="date" id="dob" name="dob"></input> <br></br>
                
                <label for="address">Address: </label>
                <input type="text" id="address" name="address"></input> <br></br>

                <label for="fad">First Appointment Date: </label>
                <input type="date" id="fad" name="fad"></input> <br></br>

                <label for="lad">Last Appointment Date: </label>
                <input type="date" id="lad" name="lad"></input> <br></br>

                <label for="number">Phone Number: </label>
                <input type="text" id="number" name="number" required></input> <br></br>

                <label for="gname">Guardian's Name: </label>
                <input type="text" id="gname" name="gname"></input> <br></br>

                <label for="gaddress">Guardian's Address: </label>
                <input type="text" id="gaddress" name="gaddress"></input> <br></br>

                <label for="gnumber">Guardian's Phone Number: </label>
                <input type="text" id="gnumber" name="gnumber"></input> <br></br>

                <label for="checkboxform">How do you like to remind upcoming appointments: </label> <br></br>

                <input type="checkbox" id="call" name="call" value="Call"></input>
                <label for="call">Call</label>
                <input type="checkbox" id="msg" name="msg" value="Message"></input>
                <label for="msg">Message</label> <br></br>

                <button type="button">Save</button>
                <button type="button">Cancel</button>

            </form>

        </div>
        
        </>
    );
}