import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
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
            <label>ID : </label>
            <input defaultValue={"ID001"} disabled />
            <br />

            <label>Name :</label>
            <input defaultValue={"Sunera Abishek"} disabled />
            <br />

            <label>Job role :</label>
            <input defaultValue={"Manager"} disabled />
            <br />

            <label>Contact No :</label>
            <input defaultValue={"0701273992"} />
            <br />

            <label>Address :</label>
            <input defaultValue={"123,Peralanda,Ragama"} />
            <br />

            <label>Email :</label>
            <input defaultValue={"abhishekperera77@gmail.com"} />
            <br />

            <label>Date of Birth :</label>
            <input defaultValue={"1999-11-27"} />
            <br />

            <label>Basic Salary :</label>
            <input defaultValue={"150,000"} />
            <br />
            <center>
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
