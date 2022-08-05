import React from 'react';
import '../App.css';
import {Header} from './Header.js';

export const Accountant = () => {
    return(
        <>
            <Header />
            <div className='basic'>
                <br />
                <button className='button navButton'>Purchase Orders</button>
                <button className='button navButton'>Accounts</button>
                <br />
                <div>
                    <p>
                        two buttons<br />
                        Accountant page!<br />
                        Accounts<br />
                        Petty cash<br />
                        Purchase ordesrs<br />
                        Print
                    </p>
                </div>
            </div>
        </>
    );
};