import { Routes, Route } from "react-router-dom";


import {Appoinment} from "../components/Appoinment";
import App from '../App';
import {Patients} from '../components/Patients';
import {PatientProfile} from '../components/PatientProfile';
import {Accountant} from '../components/Accountant';
import {Logout} from "../components/Logout";
import {AppoinmentTable} from "../components/AppoinmentTable";
import {Reception} from '../components/Reception';
import UserAccount from "../components/UserAccount";
import {AddPatientForm} from "../components/AddPatientForm";
import StaffDetails from "../components/StaffDetails/StaffDetails";
import Meetings from "../components/Meetings/MeetingDetails";
import AddMeeting from "../components/Meetings/AddMeeting";
import Profile from "../components/StaffDetails/Profile";
import { EditAppoinment } from "../components/EditAppointment";
import {AppointmentMainpage} from "../components/AppointmentMainpage";
import { Help } from "../components/Help";
import RecordList from "../components/Surgery/SurgeryDetails";
import AddSuPatient from "../components/Surgery/AddnewPatient";
import Edit from "../components/Surgery/EditDetails";
import DForm from "../components/Surgery/Dianosis/DiagnosisForm";


const createRoutes = () => {
    return (
        <Routes>
            <Route exact path = 'manager' element={<StaffDetails/>}/>
            
            <Route exact path='/' element={<App />} />
            <Route exact path='accountant' element={<Accountant />} />
            <Route exact path='receptionist' element={<Reception />} >
            </Route>
            <Route exact path='staff' element={<Patients />} />
            <Route exact path='doctor' element={<Patients />} />
            <Route exact path='admin' element={<Patients />} />
            <Route exact path='patient' element={<Patients />} />
            <Route exact path='AddPatientForm' element={<AddPatientForm />} />
            <Route exact path='editappointment' element={<EditAppoinment />} />
            <Route exact path="AppointmentMainpage" element={<AppointmentMainpage/>}/>
            <Route exact path='appointment' element={<Appoinment />} />
            <Route exact path='appoinmenttable' element={<AppoinmentTable />} />
            <Route exact path='meetings' element={<Meetings />} />    
            <Route exact path='profile' element={<Profile />} />   
            <Route exact path = 'surgery' element = {<RecordList/>} /> 
            <Route exact path = 'addNew' element = {<AddSuPatient/>}  /> 
            <Route exact path = 'edit' element = {<Edit/>} />
            <Route exact path = 'diagForm' element = {<DForm/>} />
            <Route exact path='meetings/add_meetings' element={<AddMeeting/>} /> 
            
            <Route exact path='editAcc' element={<UserAccount />} />
            <Route exact path='help' element={<Help />} />
            <Route exact path='logout' element={<Logout />} />
            <Route exact path='*' element={<h2 className='App'>404 - Page not found!</h2>} /> 
      </Routes>
    );
}

export default createRoutes;