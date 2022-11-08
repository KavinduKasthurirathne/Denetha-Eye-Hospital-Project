import React, { useState } from "react";
import axios from "axios";
import '../../App.css';
import { Grid ,Paper} from "@mui/material";
import { NavLink,useNavigate } from 'react-router-dom';




const DoctorRegister = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [desc, setDesc] = useState("");

    function sendData(e){
        e.preventDefault();
        
        
        const newDoctor ={
            name,
            email,
            mobile,
            specialization,
            desc,
        }

        axios.post("http://localhost:5000/api/doctor/add",newDoctor).then(()=>{
            alert("Doctor Added Successfully!")
        }).catch((err)=>{
            alert(err)
        })


    }

//   const history = useNavigate();
  
//   const [inpval, setINP] = useState({
//     name:"",
//     email:"",
//     mobile:"",
//     specialization:"",
//     desc:""
//   })

//   const setdata = (e) => {
//     console.log(e.target.value);
//     const {name,value} = e.target;
//     setINP((preval) => {
//         return {
//             ...preval,
//             [name]:value
//         }
//     })
//   } 

//   const addinpdata = async(e)=>{
//       e.preventDefault();

//       const {name,email,number,specialization,desc} = inpval;

//       const res = await fetch("/add",{
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//           name,email,number,specialization,desc
//         })
//       });

//       const data = await res.json();
//       console.log(data);

//       if(res.status === 422 || !data){
//         alert("error");
//         console.log("error ");
//       }else{
//         alert("data added");
//         history.push("/")
//         console.log("data added");
//       }
//   }
const logo = require('./denethaLogo.png');
const paperStyle={padding:'30px 30px',width:'450px',margin:"20px auto"};
return (
  <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
            <div> <img className='logo-img' src={logo} alt={'logo'} /></div>
            <h1>Add New Doctor</h1>
            </Grid>
       <form className="mt-5" onSubmit={sendData}>
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label class="form-label">
              Name
            </label>
            <input
              type="name"
              onChange={(e)=>{
                setName(e.target.value);
              }}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label  class="form-label">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              name="email"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label  class="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              onChange={(e)=>{
                setMobile(e.target.value);
              }}
              name="mobile"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label  class="form-label">
              Specialization
            </label>
            <input
              type="text"
              onChange={(e)=>{
                setSpecialization(e.target.value);
              }}
              name="specialization"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label  class="form-label">
              Description
            </label>
              <input
              type="text" onChange={(e)=>{
                setDesc(e.target.value);
              }} name="desc"className="form-control" id=""
            />
          </div>
            
          <button type="submit" class="button">
            Submit
          </button>
          <NavLink to='/doctorHome' style={{color:'white'}} ><button className='button'>Home</button></NavLink>
          </div>
      </form>
        </Paper>
    </Grid> 
  );
 
};

export default DoctorRegister;