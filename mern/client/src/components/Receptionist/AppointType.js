import {React} from 'react';
import './Reception.css';

export const AppointType = () => {

   
    
    return(<>
    <div id='appointType'>
        <h2 >Select Appointment type</h2>        
        <table align='center' className='AppointTable'>
            <tr>
                <td id='type'><i className="fas fa-calendar-plus"></i><br/>OPD Appoinment</td>
                <td id='type'><i className="fas fa-calendar-plus"></i><br/>Cilnic Appoinment</td>
                <td id='type'><i className="fas fa-calendar-plus"></i><br/>Operation Appoinment</td>
                <td id='type'><i className="fas fa-calendar-plus"></i><br/>Post-operation Appoinment</td>
            </tr>
        </table>
        <a href="/"> <button className='button' id='makeAppoint' >Make Appointment</button> </a>

     </div> 
        
    </>
    )
}