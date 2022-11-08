import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import '../../App.css';
import { NavLink} from "react-router-dom";

import './Report.css';

class DoctorReport extends Component {
  state = {
    name: '',
    appT: '',
    nop: 0,
    chrge: 0,
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'Income_Report.pdf');
      })
  }

  render() {
    return (
        <div className='content'>
      <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange} required/>
        <input type="text" placeholder="Appointment Type" name="appT" onChange={this.handleChange} required/>
        <input type="number" placeholder="Number of Patients" name="nop" onChange={this.handleChange} required/>
        <input type="number" placeholder="Charges" name="chrge" onChange={this.handleChange} required/>
        <button className='button' onClick={this.createAndDownloadPdf}>Download PDF</button>
        <NavLink to="/doctorHome"><button className="button">Back</button></NavLink>
      </div>
      </div>
    );
  }
}

export default DoctorReport;