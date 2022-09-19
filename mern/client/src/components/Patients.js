import '../Patients.css';
import '../App.css';
import {Header} from './Header.js';

export const Patients = () => {
    const eyeicon = require('../image/eye.png');

    return (
        <>
        <p class='head'><u><b>Patient Details</b></u></p>

        <div class='patienttable'>
            <table class='table1'>
                <tr>
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th></th>
                </tr>
                <tr>
                    <td>1000</td>
                    <td>Tharushi Perera</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1001</td>
                    <td>Thrinith Fernando</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1002</td>
                    <td>Lahiru Madushan</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1003</td>
                    <td>Samitha Dissanayake</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1004</td>
                    <td>Mohommad Nawaz</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1005</td>
                    <td>Surith Arawwala</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1006</td>
                    <td>Denuwan Jayaweera</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1007</td>
                    <td>Lakmini Wijerathna</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1008</td>
                    <td>Saman Piyadasa</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1009</td>
                    <td>Danushka Senarathne</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
                <tr>
                    <td>1010</td>
                    <td>Samantha Perera</td>
                    <td><img src={eyeicon} alt='eyeicon' className='view-icon'/></td>
                </tr>
            </table>
        </div>
        </>
    );
}