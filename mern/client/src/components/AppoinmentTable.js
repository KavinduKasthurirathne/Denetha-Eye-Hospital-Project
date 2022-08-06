import React from 'react';
import '../App.css';
export const AppoinmentTable = () => {
    return (
        <div className='AppoinmentTable'>
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Appoinemnt Number</th>
                        <th>Doctor</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tharushi</td>
                        <td>Ambalantota</td>
                        <td>0740741307</td>
                        <td>22</td>
                        <td>Female</td>
                        <td>01</td>
                        <td>Tharushi</td>
                        <td>OPD</td>
                        <td>2022-01-09</td>
                        <td>18.00</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Tharushi</td>
                        <td>Ambalantota</td>
                        <td>0740741307</td>
                        <td>22</td>
                        <td>Female</td>
                        <td>01</td>
                        <td>Tharushi</td>
                        <td>OPD</td>
                        <td>2022-01-09</td>
                        <td>18.00</td>
                    </tr>
                </tbody>
            </table>
    
        </div>
  );
}
