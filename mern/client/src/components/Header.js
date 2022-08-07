import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useCookies } from 'react-cookie';

export const Header = () => {
    //need to get userRole, name, profilepicture
    //possibly from cookies
    const [cookies] = useCookies('name', 'role');

    const logo = require('../image/denethaLogo.png');
    const design = require('../image/design.png');

    //array of items to be rendered in the navigation bar
    //put other items between dashboard and logout
    //use if-else to decide which items to render
    const navBarItems = [{
            name: 'Dashboard',
            path: '',
            visible: ['accountant', 'doctor', 'receptionist', 'staff']
        }, {
            name: 'Staff',
            path: 'staff',
            visible: ['accountant']
        }, {
            name: 'Inventory',
            path: 'inventory',
            visible: ['accountant', 'manager']
        }, {
            name: 'Patients',
            path: 'patient',
            visible: ['receptionist', 'doctor']
        }, {
            name: 'Appointments',
            path: 'appointment',
            visible: ['receptionist', 'doctor']
        }, {
            name: 'Logout',
            path: '/logout',
            visible: ['accountant', 'doctor', 'receptionist', 'staff']
        }
    ];

    return (
        <div className='flex-container header'>
            <div id='logo' className='flex-child'>
                <img src={logo} alt='logo' className='header-logo' />
            </div>
            <div id='header-design-container' >
                <img src={design} alt='header-design' id='header-design' />
            </div>
            <div id='navbar' className='flex-child right-align'><br /><br />
                {navBarItems.map((item) => {
                    if(item.visible.find((element) => element===cookies.role)){
                        return (
                            <NavLink exact to={item.path} 
                                className='navlink' 
                                activeClassName='active' >
                                {item.name}
                                </NavLink>
                            ); 
                    }else{
                        return null;
                    }
                })}
            </div>
            <div id='profile' className='flex-child right-align'>
                <div className='flex-child'><br />
                    <p id='username'>{cookies.name}</p>
                    <p id='userRole'>{cookies.role}</p>
                </div>
                <div id='profilePic' className='flex-child'><p id='profileImg'>profile picture</p></div>
            </div>
        </div>
    );
};