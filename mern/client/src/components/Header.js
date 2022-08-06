import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export const Header = () => {
    //need to get userRole, name, profilepicture
    //possibly from cookies

    const logo = require('../image/denethaLogo.png');
    const design = require('../image/design.png');

    //array of items to be rendered in the navigation bar
    //put other items between dashboard and logout
    //use if-else to decide which items to render
    const navBarItems = [{
            name: 'Dashboard',
            path: ''
        }, {
            name: 'Staff',
            path: 'staff'
        }, {
            name: 'Patients',
            path: 'patients'
        }, {
            name: 'Inventory',
            path: 'inventory'
        }, {
            name: 'Logout',
            path: '/logout'
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
                    return (
                    <NavLink exact to={item.path} 
                        className='navlink' 
                        activeClassName='active' >
                        {item.name}
                        </NavLink>
                    ); 
                })}
            </div>
            <div id='profile' className='flex-child right-align'>
                <div className='flex-child'><br />
                    <p id='username'>User Name</p>
                    <p id='userRole'>Role</p>
                </div>
                <div id='profilePic' className='flex-child'><p id='profileImg'>profile picture</p></div>
            </div>
        </div>
    );
};