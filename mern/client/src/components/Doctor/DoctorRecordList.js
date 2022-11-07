import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Doctor.css";

const DoctorRecord = props => (
  <tr>
    <td>{props.doctorRecord.docName}</td>
    <td>{props.doctorRecord.appType}</td>
    <td>{props.doctorRecord.totalPatients}</td>
    <td>{props.doctorRecord.charge}</td>
    <td>{props.doctorRecord.date.substring(0,10)}</td>
    <td>
      <Link to={"/editDoctorRecords/"+props.doctorRecord._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDoctorRecord(props.doctorRecord._id) }}>delete</a>
    </td>
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
        <p class='head'><b>Doctor Records</b></p>
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