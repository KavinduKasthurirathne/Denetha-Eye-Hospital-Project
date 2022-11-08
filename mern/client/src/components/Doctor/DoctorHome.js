import React, {useState, useEffect } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { Paper } from "@mui/material";
import "./Doctor.css";

const DoctorHome = () => {

    const [getuserdata,setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async(e)=>{

        const res = await fetch("/api/doctor/get",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
        });

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data){
      console.log("error");
      
    }else{
      setUserdata(data);
      console.log("get data");
    }
}

useEffect(()=>{
  getdata();
},[])

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
    console.log("Doctor Deleted");
    getdata();
  }
}
// const deleteuser = async(id)=>{

//   const res2 = await fetch(`/deleteuser/${id}`,{
//       method:"DELETE",
//       headers:{
//           "Content-Type":"application/json"
//         }
//   });

//   const deletedata = await res2.json();
//   console.log(deletedata);

//   if(res2.status === 422 || !deletedata){
//     console.log("error");
//   }else{
//     console.log("user deleted");
//     getdata();
//   }
// }
const paperStyle={padding:'10px 10px',width:'900px',margin:"100px auto"}

  return (
    <Paper elevation={20} style={paperStyle}>
    <div className="mt-5">
      <div className="container">
        <div className="add_btn">
          <br></br><br></br>
          <NavLink to="/addDoctor"><button className="button">+Add Doctor</button></NavLink>
          <br></br><br></br>
          <NavLink to="/doctorRecords"><button className="button">Doctor Records</button></NavLink>
          <br></br><br></br>
          <NavLink to="/addNewDoctorRecord"><button className="button">+Add Records</button></NavLink>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Specialization</th>
            </tr>
          </thead>
          <tbody>

          {
            getuserdata.map((element,id)=>{
              return(
                <>
                <tr>
              <th scope="row">{id + 1}</th>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.mobile}</td>
              <td>{element.specialization}</td>
              <td className="d-flex justify-content-between">
                <NavLink to={`doctorProfile/${element._id}`}><button className="button"><RemoveRedEyeIcon /></button></NavLink>
                <NavLink to={`editDoctor/${element._id}`}><button className="button"><EditIcon/></button></NavLink>
                <button className="button" onClick={()=>deleteuser(element._id)}><DeleteIcon/></button>
              </td>
            </tr> 
                </>
              )
            })
          }      
          </tbody>
        </table>
      </div>
    </div>
    </Paper>
  );
};

export default DoctorHome;


