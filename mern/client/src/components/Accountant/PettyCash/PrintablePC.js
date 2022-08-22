import React from "react";
import '../Accountant.css';
import '../printable.css';
import '../../../App.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const PrintablePC = React.forwardRef((props, ref) => {

    const calculateTotal = () => {
        let sum = 0;
        if(props.data){
            props.data.map((item)=>(sum += parseFloat(item.amount)));
        }
        return(sum.toFixed(2));
    };

    const getDateString = (iso) => {
        const date = new Date(iso);
        const correctDate = new Date(date.getTime() + 360*60000);
        return (correctDate.toISOString().split('T')[0]);
    };

    const reimburse = () => {
        let re = parseFloat(props.reserve) - calculateTotal();
        return re.toFixed(2);
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
                    <h2>Petty Cash</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='th'>Month</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='td'>{props.root}</td>
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
                                Description
                            </TableCell>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 70}} >
                                Type
                            </TableCell>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 70}} >
                                Vo. Num.
                            </TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold', width: 80}} >
                                Amount(Rs.)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data.map((row)=>(
                                <TableRow key={row._id} >
                                    <TableCell align='left' >{getDateString(row.date)}</TableCell>
                                    <TableCell align='left' >{row.pcItem}</TableCell>
                                    <TableCell align='left' >{row.type}</TableCell>
                                    <TableCell align='left' >{row.vNum}</TableCell>
                                    <TableCell align='right' >{row.amount}</TableCell>
                                </TableRow>
                            ))
                        }
                        <TableRow>
                            <TableCell align='right' colSpan={4}><div className='bold-text'>Total</div></TableCell>
                            <TableCell align='right' ><div className='bold-text'>{calculateTotal()}</div></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            <div id='sign' >
                <p className='normal-text right-align'>{`Reserve -> `}{props.reserve}</p>
                <p className='normal-text right-align'>{`Total Usage -> `}{calculateTotal()}</p>
                <p className='normal-text right-align'>{`Remainder -> `}{reimburse()}</p>
            </div>
        </div>
    );
});

export default PrintablePC;