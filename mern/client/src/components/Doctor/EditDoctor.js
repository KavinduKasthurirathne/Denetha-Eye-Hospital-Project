import React, { useEffect } from "react";
import { NavLink ,useParams , useNavigate } from "react-router-dom";
import { useState } from "react";
import { Paper } from "@mui/material";



const EditDoctor = () => {

  //const [getuserdata,setUserdata] = useState([]);
  //console.log(getuserdata);

  const history = useNavigate("");
  // const [name,setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobile, setMobile] = useState('');
  // const [specialization,setSpecialization] = useState('');
  // const [desc,setDesc] = useState('');
  // const params = useParams();

  // useEffect(()=>{
  //     getDoctorDetails();
  // },[]);

  // const getDoctorDetails = async ()=>{
  //   console.warn(params)
  //   let result = await fetch(`/api/doctor/getuser/${params.id}`);
  //   result = await result.json();
  //   console.warn(result)
  //   setName(result.name);
  //   setEmail(result.email);
  //   setMobile(result.mobile);
  //   setSpecialization(result.specialization);
  //   setDesc(result.desc);
  // }

const [inpval, setINP] = useState({
    name:"",
    email:"",
    mobile:"",
    specialization:"",
    desc:""
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const {name,value} = e.target;
    setINP((preval) => {
        return {
            ...preval,
            [name]:value
        }
    })
  } 

  const {id}  = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`/api/doctor/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setINP(data)
      console.log("get data");
    }
  }

  useEffect(()=>{
    getdata();
  },[]);

  const updateuser = async(e)=>{
    e.preventDefault();

    const {name,email,mobile,specialization,desc} = inpval;

    const res2 = await fetch(`/api/doctor/update/${id}` ,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,email,mobile,specialization,desc
      })
    });

    const data2 = await res2.json();
    console.log(data2);

    if(res2.status === 422 || !data2){
      alert("fill the data");
    }else{
      alert("Doctor Updated Successfuly!");
      history.push("/")
    }

  }

  const paperStyle={padding:'1px 1px',width:'1200px',margin:"50px auto"}

  return (
    <Paper elevation={20} style={paperStyle}>
    <div className="container">
      <NavLink to="/doctorHome"><button className="button">Home</button></NavLink>
      <form className="mt-5">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label>
              Name
            </label>
            <input
              type="name"
              value={inpval.name}
              onChange={setdata}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label>
              Email Address
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label>
              Mobile Number
            </label>
            <input
              type="number"
              value={inpval.mobile}
              onChange={setdata}
              name="mobile"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label >
              Specialization
            </label>
            <input
              type="text"
              value={inpval.specialization}
              onChange={setdata}
              name="specialization"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-12 col-md-12 col-12">
            <label>
              Description
            </label>
            <textarea type="text" value={inpval.desc} onChange={setdata} name="desc"className="form-control" id="" cols="30" rows="5"></textarea>
          </div>

          <button type="submit" onClick={updateuser} class="button">
            Update
          </button>
        </div>
      </form>
    </div>
    </Paper>
  );
};

export default EditDoctor;