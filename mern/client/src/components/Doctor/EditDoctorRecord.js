import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditDoctorRecord extends Component {
  constructor(props) {
    super(props);
    this.onChangeDocName = this.onChangeDocName.bind(this);
    this.onChangeAppType = this.onChangeAppType.bind(this);
    this.onChangeTotalPatients = this.onChangeTotalPatients.bind(this);
    this.onChangeCharge = this.onChangeCharge.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      docName: '',
      appType: '',
      totalPatients: 0,
      charge: 0,
      date: new Date(),
      appTypes: []
    }
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/api/DoctorRecords/${id}`)
      .then(response => {
        this.setState({
          docName: response.data.docName,
          appType: response.data.appType,
          totalPatients: response.data.totalPatients,
          charge: response.data.charge,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/api/AppType/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            appTypes: response.data.map(appTypeN => appTypeN.appType),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeDocName(e) {
    this.setState({
      docName: e.target.value
    })
  }
  onChangeAppType(e) {
    this.setState({
      appType: e.target.value
    })
  }
  onChangeTotalPatients(e) {
    this.setState({
      totalPatients: e.target.value
    })
  }
  onChangeCharge(e) {
    this.setState({
      charge: e.target.value
    })
  }
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const doctorRecord = {
      docName: this.state.docName,
      appType: this.state.appType,
      totalPatients: this.state.totalPatients,
      charge: this.state.charge,
      date: this.state.date
    }

    console.log(doctorRecord);

    axios.post('http://localhost:5000/api/DoctorRecords/update'+ this.props.match.params.id, doctorRecord)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Doctor Record</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Doctor Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.docName}
              onChange={this.onChangeDocName}
              />
        </div>
        <div className="form-group"> 
          <label>Appoinment Type: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.appType}
              onChange={this.onChangeAppType}>
              {
                this.state.appTypes.map(function(appTypeN) {
                  return <option 
                    key={appTypeN}
                    value={appTypeN}>{appTypeN}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Total Patients: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.totalPatients}
              onChange={this.onChangeTotalPatients}
              />
        </div>
        <div className="form-group">
          <label>Doctor Charges per Patient(in LKR): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.charge}
              onChange={this.onChangeCharge}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Update Doctor Record" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}