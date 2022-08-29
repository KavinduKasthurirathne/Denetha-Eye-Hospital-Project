import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function SearchBar({ placeholder}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  let data;

  axios.post('http://localhost:5000/patient/search' , {})
    .then((res) => {
      data=res.data;
    })
    .catch((err) => {
      console.log(err)});
  

  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      console.log(value.name);
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
    <><div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>

      </div>
      <div className="patientdetails">Patient Name :<br /><br />
        <i className="fas fa-phone"> :</i>
      </div>


      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 12).map((value, key) => {
            return (
              <a className="dataItem hover" href={value.link}>
                <p>{value.name} </p>
              </a>
            );
          })}

        </div>
      )}

    </div>
    </>
  );
}

export default SearchBar;