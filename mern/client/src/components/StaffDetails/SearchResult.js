import { React } from "react";
import "./StaffDetails.css";

export const SearchResult = (props) => {
  const clearPatient = () => {
    props.setName("");
  };

  return (
    <>
      <div className="patientdetails">
        <strong>Patient Name : </strong>
        {props.Pname}
        <br />
        <i className="fas fa-phone"> </i> : {props.Pno}
        {props.Pname !== "" && props.Pno !== "" ? (
          <button className="button" id="Clearbtn" onClick={clearPatient}>
            <i className="far fa-trash-alt"></i>
          </button>
        ) : null}
      </div>
    </>
  );
};
