import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Doctor.css";




const DoctorDetails = () => {

  const [getuserdata,setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const history = useNavigate();

  const getdata = async () => {
    const res = await fetch(`/api/doctor/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  }

  useEffect(()=>{
    getdata();
  })

  const deleteuser = async(id)=>{

    const res2 = await fetch(`/api/doctor/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
          }
    });
  
    const deletedata = await res2.json();
    console.log(deletedata);
  
    if(res2.status === 422 || !deletedata){
      console.log("error");
    }else{
      console.log("user deleted");
      history.push("/");
    }
  }

  return (
    <div className="container mt-10">
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
        <img src={require('./profile.png')} style={{ width: 80 }} alt="profile"/>
          <div className="row">  
            <div className="left_view col-lg-6 col-md-6 col-12">
              <h3 className="mt-3">
                
                Name: <span>{getuserdata.name}Jagath Perera</span>
              </h3>
              <p className="mt-3">
                <MailOutlineIcon />
                Email: <span>{getuserdata.email}JP123@gmail.com</span>
              </p>
              <p className="mt-3">
                <PhoneAndroidIcon />
                Mobile: <span>{getuserdata.mobile}0776545654</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <HealthAndSafetyIcon />
                Specialization: <span>{getuserdata.specialization}Eye Surgeon</span>
              </p>
              <p className="mt-3">
                Description: <span>{getuserdata.desc}Channels on Fridays</span>
              </p>
            </div>
          </div>
           <div className="add_btn">
            <br></br>
            <NavLink to="/createReport"><button className="button">Create Income Report</button></NavLink>
            <NavLink to="/addNewAppointmentType"><button className="button">Add Appointment Type</button></NavLink>
          </div>  
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDetails;