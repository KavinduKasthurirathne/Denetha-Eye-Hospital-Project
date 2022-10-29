import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { useCookies } from "react-cookie";
import axios from "axios";

const Profile = () => {
  var [contactno, setContactno] = useState();
  var [address, setAddress] = useState();
  var [email, setEmail] = useState();
  var [dob, setDob] = useState();
  var [basicSal, setBasicSal] = useState();
  const [cookies] = useCookies("id", "username", "role", "name");

  const navigate = useNavigate();

  const findProfile = async () => {
    const data = {
      id: cookies.id,
    };
    await axios
      .post("http://localhost:5000/api/profile/get", data)
      .then(({ data }) => {
        if (data.message === null) {
          setContactno(data.contactno);
          setAddress(data.address);
          setEmail(data.email);
          setDob(data.dob);
          setBasicSal(data.basicSal);
        }
      });
  };

  //add data to the profile table when user added personal data
  function addData(e) {
    e.preventDefault();

    const addNewDataToProfile = {
      contactno,
      address,
      email,
      dob,
      basicSal,
    };

    axios
      .post("http://localhost:5000/api/profile/add", addNewDataToProfile)
      .then(() => {
        alert("Data Inserted!");
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }

  const backbtn = useNavigate();
  return (
    <div className="mainDiv">
      <div className="updateform">
        <h3>Additional Info</h3>
        <hr />

        <div className="updateFormout">
          <form onSubmit={addData}>

            <label>Contact No :</label>
            <input value={contactno} />
            <br />

            <label>Address :</label>
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
            />
            <br />

            <label>Email :</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <br />

            <label>Date of Birth :</label>
            <input
              onChange={(e) => {
                setDob(e.target.value);
              }}
              value={dob}
            />
            <br />
            <center>
              <button type="submit" className="button">
                Save
              </button>
              <button className="button">Update</button>
              <button style={{ backgroundColor: "#ff4d4d" }} className="button">
                Delete
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
