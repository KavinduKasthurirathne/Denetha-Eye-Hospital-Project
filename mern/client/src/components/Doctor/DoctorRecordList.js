import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Doctor.css";

const DoctorRecord = props => (
  <tr>
    <td><center>Dr.{props.doctorRecord.docName}</center></td>
    <td><center>{props.doctorRecord.appType}</center></td>
    <td><center>{props.doctorRecord.totalPatients}</center></td>
    <td><center>{props.doctorRecord.charge}</center></td>
    <td><center>{props.doctorRecord.date.substring(0,10)}</center></td>
    <td><center><button className="button"  onClick={() => {
                 if (window.confirm("Are you sure you want to delete?") === true) {
                    props.deleteDoctorRecord(props.doctorRecord._id);
                  } 
                    }}><i className="fas fa-trash-alt"></i></button></center></td>
  </tr>
)

export default class DoctorRecordList extends Component {
  constructor(props) {
    super(props);

    this.deleteDoctorRecord = this.deleteDoctorRecord.bind(this)

    this.state = {doctorRecords: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/DoctorRecords/')
      .then(response => {
        this.setState({ doctorRecords: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteDoctorRecord(id) {
    axios.delete('http://localhost:5000/api/DoctorRecords/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        doctorRecords: this.state.doctorRecords.filter(el => el._id !== id)
    })
  }

  doctorRecordsList() {
    return this.state.doctorRecords.map(currentDoctorRecord => {
      return <DoctorRecord doctorRecord={currentDoctorRecord} deleteDoctorRecord={this.deleteDoctorRecord} key={currentDoctorRecord._id}/>;
    })
  }

  render() {
    return (
      <div>
        <br/>
        <center><h2>Doctor Records</h2></center>
        <div className="container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Doctor</th>
              <th>Appoinment</th>
              <th>Patients</th>
              <th>Charges</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.doctorRecordsList() }
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}