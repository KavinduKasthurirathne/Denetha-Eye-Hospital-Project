import { Routes, Route } from "react-router-dom";
import {Appoinment} from "../components/Appoinment";
import {EditAppoinment} from "../components/EditAppoinment";
import {App} from '../App';
import {Patients} from '../components/Patients'
import {Accountant} from '../components/Accountant';
import { Logout } from "../components/Logout";
import {AppoinmentTable} from "../components/AppoinmentTable";
const createRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<App />} />
            <Route exact path='accountant' element={<Accountant />} />
            <Route exact path='manager' element={<Patients />} />
            <Route exact path='receptionist' element={<Patients />} />
            <Route exact path='staff' element={<Patients />} />
            <Route exact path='doctor' element={<Patients />} />
            <Route exact path='admin' element={<Patients />} />
            <Route exact path='Appoinment' element={<Appoinment />} />
            <Route exact path='EditAppoinment' element={<EditAppoinment />} />
            <Route exact path='AppoinmentTable' element={<AppoinmentTable />} />
            <Route exact path='logout' element={<Logout />} />
            <Route exact path='*' element={<h2 className='App'>404 - Page not found!</h2>} /> 
      </Routes>
    );
}

export default createRoutes;