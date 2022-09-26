import '../PatientProfile.css';
import '../App.css';

export const Patients = () => {

    return (
        <>
       
       <div class='patienttable'>
            <p class='denethahead'><u><b>Denetha Eye Hospital</b></u></p>
            <p class='head'><u><b>Patient Details</b></u></p>

            <table class='patientdetails'>
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

                <div class='checkboxes'>
                    <input type="checkbox" id="call" name="call" value="Call"></input>
                    <label for="call">Call</label> <t></t>
                    <input type="checkbox" id="msg" name="msg" value="Message"></input>
                    <label for="msg">Message</label>
                </div>

                <div class='buttons'>
                    <button class='saveBtn' type="button"><b>Save</b></button>
                    <button class='cancelBtn' type="button"><b>Cancel</b></button>
                </div>

            </table>

        </div>
        
        </>
    );
}