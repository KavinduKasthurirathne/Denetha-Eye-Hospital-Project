import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const Profile = (props) => {
  // const getDateString = (iso) => {
  //   const date = new Date(iso);
  //   const correctDate = new Date(date.getTime() + 360 * 60000);
  //   return correctDate.toISOString().split("T")[0];
  // };
  const [records, setRecords] = useState([]);
  const [deleteprofile, setDeleteprofile] = useState(false);

  //add data to the profile table when user added personal data

  const [validation, setValidation] = useState(false);
  var [contactno, setContactno] = useState("");
  var [address, setAddress] = useState("");
  var [email, setEmail] = useState("");
  var [dob, setDob] = useState("");
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
        setDob(data[0].dob);
        // console.log(data[0].dob);
        // console.log(getDateString(data[0].dob));
        setDocId(data[0]._id);
      });
  };

  useEffect(() => {
    if (
      contactno.length == 10 &&
      // contactno.pattern == "[0-9]" &&
      contactno != "" &&
      email != "" &&
      address != "" &&
      dob != ""
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
    console.log(validation);
  }, [contactno, email, address, dob]);

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
        // window.location.reload(true);
        navigate("/meetings");
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
        findProfile();
        navigate("/meetings");
      })
      .catch((err) => {
        alert(err);
      });
  }

  async function deleteProfile(event) {
    await axios
      .post("http://localhost:5000/api/profile/delete", { pid: docId })
      .then(() => {
        setDeleteprofile(false);
        findProfile();
        navigate("/meetings");
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
          {/* <label>Contact No :</label> */}
          <TextField
            sx={{ width: "50%" }}
            label="Contact No"
            helperText="Enter only 10 digits"
            reqired
            pattern="[0-9]{10}"
            onChange={(e) => {
              setContactno(e.target.value);
            }}
            value={contactno}
          />
          <br /> <br />
          {/* <label>Address :</label> */}
          <TextField
            sx={{ width: "50%" }}
            label="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
          <br />
          <br />
          {/* <label>Email :</label> */}
          <TextField
            sx={{ width: "50%" }}
            label="Email"
            type={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <br /> <br />
          {/* <label>Date of Birth :</label> */}
          <TextField
            sx={{ width: "50%" }}
            label="Date of birth"
            onChange={(e) => {
              setDob(e.target.value);
            }}
            value={dob}
          />
          <br /> <br />
          <center>
            <button disabled={!validation} className="button" onClick={addData}>
              Add
            </button>
            <button
              disabled={!validation}
              className="button"
              onClick={updateProfile}
            >
              Update
            </button>
            <button
              style={{ backgroundColor: "#ff4d4d" }}
              onClick={() => setDeleteprofile(true)}
              className="button"
            >
              Delete
            </button>
          </center>
        </div>
      </div>
      <Dialog
        open={deleteprofile}
        onClose={() => setDeleteprofile(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Warning!</DialogTitle>
        <DialogContent>
          Are you sure want to delete the profile details?
        </DialogContent>
        <DialogActions>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              variant="contained"
              onClick={deleteProfile}
              autoFocus
              color="secondary"
            >
              Confirm
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;
