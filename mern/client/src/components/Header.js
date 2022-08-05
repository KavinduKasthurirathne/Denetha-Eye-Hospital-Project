import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export const Header = () => {
    //need to get userRole, name, profilepicture
    //possibly from cookies

    const logo = require('../image/denethaLogo.png');

    //array of items to be rendered in the navigation bar
    const navBarItems = [{
            name: 'Dashboard',
            path: ''
        }, {
            name: 'Staff',
            path: 'staff'
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
                {/* <NavLink exact to='' className='navlink' activeClassName='active'>Dashboard</NavLink>
                <NavLink exact to='inventory' className='navlink' activeClassName='active'>Inventory</NavLink>
                <NavLink exact to='staff' className='navlink' activeClassName='active'>Staff</NavLink>
                <NavLink exact to='/logout' className='navlink' activeClassName='active'>Logout</NavLink> */}
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