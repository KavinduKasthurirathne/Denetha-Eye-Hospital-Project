import '../PatientProfile.css';
import '../App.css';


const printicon = require('../image/print.png');

export const PatientProfile = () => {

    function printProfile(e) {
        alert("Clicked")
    };

    return (
        <>
       
       <div class='patienttable'>
            <p class='denethahead'><u><b>Denetha Eye Hospital</b></u></p>
            <p class='head'><u><b>Patient Details</b></u></p>

            <table class='table2'>
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

                <label for="number">Phone Number: </label>
                <input type="text" id="number" name="number" required></input> <br></br>

                <label for="gname">Guardian's Name: </label>
                <input type="text" id="gname" name="gname"></input> <br></br>

                <label for="gnumber">Guardian's Phone Number: </label>
                <input type="text" id="gnumber" name="gnumber"></input> <br></br>


                <div class='buttons'>
                    <button id='deleteBtn' className='button' type="delete"><b>Delete</b></button>
                    <button id='updateBtn' className='button' type="submit"><b>Update</b></button>
                    <button id='cancelBtn' className='button' type="cancel"><b>Cancel</b></button>
                </div>
                
                <div class='printButton'>
                    <button id='printBtn' className='button' type='print'>
                        <img id="redirecting" src={printicon} alt='printicon' className='print-icon' onClick={printProfile}/>
                    </button>
                </div>

            </table>

        </div>
        
        </>
    );
}