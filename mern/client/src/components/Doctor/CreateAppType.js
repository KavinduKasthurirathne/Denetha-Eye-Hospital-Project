import React, { Component } from 'react';
import axios from 'axios';
import { NavLink} from "react-router-dom";

export default class CreateAppType extends Component {
  constructor(props) {
    super(props);
    this.onChangeAppType = this.onChangeAppType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      appType: ''
    }
  }
  onChangeAppType(e) {
    this.setState({
        appType: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const appTypeN = {
      appType: this.state.appType
    }

    console.log(appTypeN);

    axios.post('http://localhost:5000/api/AppType/add', appTypeN)
      .then(res => console.log(res.data));
      alert("Appointment Type Added Successfully!");

    this.setState({
      appType: ''
    })
  }
  render() {
    return (
      <div>
       <center><h2>Add New Appoinment Type</h2></center>
        <form onSubmit={this.onSubmit}>
        <div class="content"> 
            <label>Appointment Type Name: </label>
            <input  type="text"
                required
                value={this.state.appType}
                onChange={this.onChangeAppType}
                />
          <button type="submit" class="button">
            Add
          </button>
          <NavLink to="/doctorHome"><button className="button">Back</button></NavLink>
          </div>
        </form>
      </div>
    )
  }
}