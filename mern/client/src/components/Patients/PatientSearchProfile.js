import React, { useState } from "react";
import "./PatientSearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function PatientSearchBar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  let data;

  //assigning document content to data variable
  axios.post('http://localhost:5000/api/patient/search' , {})
    .then((res) => {
      data=res.data;
    })
    .catch((err) => {
      console.log(err)});
  

  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      console.log("loop");
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
    <div id="searchPatient">
      <div className="searchPatientInputs">
        <input
          type="text"
          placeholder="Enter Patient Name..."
          value={wordEntered}
          onChange={handleFilter} />

        <div className="searchPatientIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      
      
      
      {/* displaying  most relavant name and phone */}
      {filteredData.length !== 0 && (
        <div className="patientDataResult">
          {filteredData.slice(0, 12).map((value, key) => {
            
            return (
              <div className="dataItem hover" key={key} onClick={()=>{
                  props.setSelectedName(filteredData[key].name);
                  props.setSelectedPhone(filteredData[key].phone); 
                  clearInput();
                  
                }}>
                <p>{value.name} - {value.phone}</p>
                
              </div>
            );
          })
          }
        </div>
      )}
      
    </div>
    </>
  );
}

export default PatientSearchBar;