import '../Patients.css';
import '../App.css';
import {Header} from './Header.js';

export const Patients = () => {
    const eyeicon = require('../image/eye.png');

    return (
        <>
        <Header />
        <h1 class='head'><u>Patient Details</u></h1>
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
            </table>
        </div>
        </>
    );
}