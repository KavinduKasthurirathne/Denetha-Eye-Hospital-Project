import React from "react";
import '../Accountant.css';
import '../printable.css';
import '../../../App.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const PrintablePO = React.forwardRef((props, ref) => {

    var items = [];
    if(props.data.items) {
        items = JSON.parse(props.data.items);
    }

    const calculateTotal = () => {
        let sum = 0;
        if(items){
            if(items.length>0){
                items.map((item)=>(sum += parseFloat(item.amount)));
            }
        }
        return(sum.toFixed(2));
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
                    <h2>Purchase Order</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='th'>PO Number</th>
                                <th className='th'>PO Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='td'>{props.data.poNumber}</td>
                                <td className='td'>{props.data.date}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='th'>Vendor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='td'>{props.data.vendor}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr />

            <div id='data' className='center-align'>
                <TableContainer>
                    <Table aria-label='Item table' size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell align='left' style={{fontWeight: 'bold'}}>Description</TableCell>
                                <TableCell align='right' style={{fontWeight: 'bold'}}>Quantity</TableCell>
                                <TableCell align='right' style={{fontWeight: 'bold'}}>Unit Price(Rs.)</TableCell>
                                <TableCell align='right' style={{fontWeight: 'bold'}}>Amount(Rs.)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                items.map((row)=>(
                                    <TableRow key={row.item}>
                                        <TableCell component='th' scope='row' >{row.item}</TableCell>
                                        <TableCell align='right' >{row.num}</TableCell>
                                        <TableCell align='right' >{row.unit}</TableCell>
                                        <TableCell align='right' >{row.amount}</TableCell>
                                    </TableRow>
                                ))
                            }
                            <TableRow>
                                <TableCell align='right' colSpan={3}><div className='bold-text'>Total</div></TableCell>
                                <TableCell align='right' ><div className='bold-text'>{calculateTotal()}</div></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div id='sign' >
                <p>Mode of payment : {props.data.mode}</p><br /><br />
                <div className='po-flex' >
                    <div className='po-flex-child' >
                        <p>...........................................<br />
                            Prepared by
                        </p>
                    </div>
                    <div className='po-flex-child' >
                        <p>...........................................<br />
                            Checked by
                        </p>
                    </div>
                    <div className='po-flex-child' >
                        <p>...........................................<br />
                            Approved by
                        </p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
});

export default PrintablePO;