import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { useCookies } from "react-cookie";
import axios from "axios";

const Profile = (props) => {
  const getDateString = (iso) => {
    const date = new Date(iso);
    const correctDate = new Date(date.getTime() + 360 * 60000);
    return correctDate.toISOString().split("T")[0];
  };
  const [records, setRecords] = useState([]);

  //add data to the profile table when user added personal data

  var [contactno, setContactno] = useState();
  var [address, setAddress] = useState();
  var [email, setEmail] = useState();
  var [dob, setDob] = useState();
  var [docId, setDocId] = useState();
  const [cookies] = useCookies("id", "username", "role", "name");

  const navigate = useNavigate();

  const findProfile = async () => {
    const data = {
      id: cookies.id,
    };
    await axios
      .post("http://localhost:5000/api/profile/get", data)
      .then(({ data }) => {
        setContactno(data[0].contactno);
        setAddress(data[0].address);
        setEmail(data[0].email);
        setDob(getDateString(data[0].dob));
        setDocId(data[0]._id);
      });
  };

  useEffect(() => {
    findProfile();
  }, []);

  async function addData(e) {
    e.preventDefault();

    const addNewDataToProfile = {
      id: cookies.id,
      contactno,
      address,
      email,
      dob,
    };

    await axios
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

  async function updateProfile(event) {
    const updateProfile = {
      docId,
      contactno,
      address,
      email,
      dob,
    };

    console.log(updateProfile);
    await axios
      .post("http://localhost:5000/api/profile/update", updateProfile)
      .then(() => {
        alert("Profile updated Successfully!");
        findProfile();
      })
      .catch((err) => {
        alert(err);
      });
  }

  async function deleteProfile(event) {
    await axios
      .post("http://localhost:5000/api/profile/delete", { pid: docId })
      .then(() => {
        alert("Profile deleted!");
        findProfile();
      })
      .catch((err) => {
        alert(err);
      });
  }

  const backbtn = useNavigate();

  return (
    <div className="mainDiv">
      <div className="updateform">
        <h3>Additional Info</h3>
        <hr />

        <div className="updateFormout">
          <label>Contact No :</label>
          <input
            onChange={(e) => {
              setContactno(e.target.value);
            }}
            value={contactno}
          />
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
            <button className="button" onClick={addData}>
              Save
            </button>
            <button className="button" onClick={updateProfile}>
              Update
            </button>
            <button
              style={{ backgroundColor: "#ff4d4d" }}
              onClick={deleteProfile}
              className="button"
            >
              Delete
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Profile;
