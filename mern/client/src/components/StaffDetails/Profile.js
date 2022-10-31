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
      <button
        onClick={() => {
          backbtn(-1);
        }}
        style={{
          position: "relative",
          marginTop: "3%",
          marginLeft: "3%",
          width: "100px",
          backgroundColor: "#CBCBCB",
        }}
        className="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="black"
          class="bi bi-arrow-left"
          viewBox="0 0 15 15"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </button>
      <div className="updateform">
        <h3>Profile</h3>
        <hr />

        <div className="updateFormout">
          <form>
            <div>
              <label>Username : </label>
              <input value={cookies.username} disabled />

              <br />
            </div>

            <label>Name :</label>
            <input value={cookies.name} disabled />
            <br />

            <label>Job role :</label>
            <input value={cookies.role} disabled />
            <br />

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

            <label>Basic Salary :</label>
            <input
              onChange={(e) => {
                setBasicSal(e.target.value);
              }}
              value={basicSal}
            />
            <br />
            <center>
              <button type="submit" className="button" onSubmit={addData}>
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
