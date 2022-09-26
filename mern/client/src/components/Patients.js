import '../Patients.css';
import '../App.css';
import {Header} from './Header.js';

export const Patients = () => {
    const eyeicon = require('../image/eye.png');

    return (
        <>
        <p class='headerPatients'><u><b>Patient Details</b></u></p>

        <div class='patienttable'>
            <table class='table1'>
                <tr>
                    <th>Patient Name</th>
                    <th>Phone Number</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Tharushi Perera</td>
                    <td>071 234 5678</td>
                    <td><img id="redirecting" src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>Thrinith Fernando</td>
                    <td>077 333 3478</td>
                    <td><img id="redirecting" src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>Lahiru Madushan</td>
                    <td>075 163 5498</td>
                    <td><img id="redirecting" src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>Samitha Dissanayake</td>
                    <td>071 242 2700</td>
                    <td><img id="redirecting" src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>Mohommad Nawaz</td>
                    <td>070 737 3773</td>
                    <td><img id="redirecting" src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
            </table>
        </div>
        </>
    );
}