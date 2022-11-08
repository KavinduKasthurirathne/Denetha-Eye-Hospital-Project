import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TestAddAccount } from "../TestAddAccount";

function AddNewProfile(props) {
  // const AddNewMember = () => {
  // const backbtn = useNavigate();

  return (
    <div className="mainDiv">
      {/* <button
        onClick={() => {
          // backbtn(-1);
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
      </button> */}
      <div className="updateform">
        <h3>Add Account</h3>
        <hr />
        <TestAddAccount />
        {/* <div className="updateFormout">
          <form>
            <label>Contact No :</label>
            <input />
            <br />

            <label>Address :</label>
            <input />
            <br />

            <label>Email :</label>
            <input />
            <br />

            <label>Date of Birth :</label>
            <input />
            <br />

            <label>Basic Salary :</label>
            <input />
            <br />
            <center>
              <button className="button">Save</button>
            </center>
          </form>
      </div>*/}
      </div>
    </div>
  );
}

export default AddNewProfile;
