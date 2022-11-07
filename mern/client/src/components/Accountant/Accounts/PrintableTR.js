import React from "react";
import '../Accountant.css';
import '../printable.css';
import '../../../App.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const PrintableTR = React.forwardRef((props, ref) => {

    const calculatePatientTotal = (list) => {
        let sum = 0;
        if(list){
            list.map((item)=>(sum += parseFloat(item.amount)));
        }
        return(sum.toFixed(2));
    };

    const calculateDoctorTotal = () => {
        return (2000.00).toFixed(2);
    };

    const getDateString = (iso) => {
        const date = new Date(iso);
        const correctDate = new Date(date.getTime() + 360*60000);
        return (correctDate.toISOString().split('T')[0]);
    };

    const logo = require('../../../image/denethaLogo.png');
    return (
        <div className='a4' ref={ref}>
            <div className='po-flex' >
                <div id='po-logo-container' className='po-flex-child'>
                    <img id='print-logo' src={logo} alt='logo' />
                </div>
                <div className='po-flex-child'>
                    <br />
                    <h4>Denetha Eye Hospital (Pvt) Ltd</h4>
                    <p style={{fontSize:'small'}}>No.01, 1st Lane,<br />
                        Bauddhaloka Mawatha,
                        Kurunegala.<br />
                        Tel: 0372222013
                    </p>
                </div>
                <div className='po-flex-child'>
                    <h2>Daily Transactions</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='th'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='td'>{props.date}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr />

            <div id='data' className='center-align'>
                <TableContainer>
                <Table aria-label='pc-item-table' size='small' >
                    <TableHead>
                        <TableRow>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 75}} >
                                Date
                            </TableCell>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 190}} >
                                Title
                            </TableCell>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 70}} >
                                Type
                            </TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold', width: 80}} >
                                Amount(Rs.)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.patientData.map((row)=>(
                                <TableRow key={row._id} >
                                    <TableCell align='left' >{getDateString(row.date)}</TableCell>
                                    <TableCell align='left' >{row.name}</TableCell>
                                    <TableCell align='left' >{row.type}</TableCell>
                                    <TableCell align='right' >{row.amount}</TableCell>
                                </TableRow>
                            ))
                        }
                        {/* <TableRow>
                            <TableCell align='right' colSpan={3}><div className='bold-text'>Patient Sub Total</div></TableCell>
                            <TableCell align='right' ><div className='bold-text'>{calculatePatientTotal(props.patientData)}</div></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='right' colSpan={3}><div className='bold-text'>Doctor Sub Total</div></TableCell>
                            <TableCell align='right' ><div className='bold-text'>{calculateDoctorTotal()}</div></TableCell>
                        </TableRow> */}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            <div id='sign' >
                <h3 className='normal-text right-align'>
                    {`Gross Income from patients -> `}{(calculatePatientTotal(props.patientData))}
                </h3>
            </div>
        </div>
    );
});

export default PrintableTR;