import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {SearchResult} from "./SearchResult";

function SearchBar({ placeholder}) {
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

  const [selectedName, setSelectedName] = useState("");
  const [selectedPhone, setSelectedPhone] = useState("");



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
      


      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 12).map((value, key) => {
            
            return (
              <div className="dataItem hover" key={key} onClick={()=>{
                  setSelectedName(filteredData[key].name);
                  setSelectedPhone(filteredData[key].phone); 
                  clearInput();
                }}>
                <p>{value.name} - {value.phone}</p>
                
              </div>
            );
          
          })}

        </div>
      )}

    </div>
    
    <SearchResult Pname={selectedName} Pno={selectedPhone} setName={setSelectedName} setPhone={setSelectedPhone}/>
    </>
  );
}

export default SearchBar;