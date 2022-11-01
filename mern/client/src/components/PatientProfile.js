import '../PatientProfile.css';
import '../App.css';

export const PatientProfile = () => {

    return (
        <>
       
       <div class='patienttable'>
            <p class='denethahead'><u><b>Denetha Eye Hospital</b></u></p>
            <p class='head'><u><b>Patient Details</b></u></p>

            <table class='patientdetails'>
                <label for="name">Name: </label>

                <label for="age">Age: </label>

                <label for="gender">Gender (M/F): </label>

                <label for="dob">Date of Birth: </label>
                
                <label for="address">Address: </label>

                <label for="number">Phone Number: </label>

                <label for="gname">Guardian's Name: </label>

                <label for="gaddress">Guardian's Address: </label>

                <label for="gnumber">Guardian's Phone Number: </label>

                <div class='buttons'>
                    <button class='saveBtn' type="button"><b>Save</b></button>
                    <button class='cancelBtn' type="button"><b>Cancel</b></button>
                </div>

            </table>

        </div>
        
        </>
    );
}