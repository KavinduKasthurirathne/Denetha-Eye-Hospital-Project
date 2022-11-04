import React, { useState } from "react";
import "..Receptionist/SearchBar.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import StaffDetails from "./StaffDetails";

function searchBar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setwordEntered] = useState("");

  let data;

  axios
    .get("http://localhost:5000/api/staff/get/", {})
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setwordEntered(searchWord);
    const newFilter = data.filter((value) => {
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
    setwordEntered("");
  };

  return (
    <>
      <div id="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Search"
            value={wordEntered}
            onChange={handleFilter}
          />

          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>

        {/* displaying  most relavant name and phone */}
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 12).map((value, key) => {
              return (
                <div
                  className="dataItem hover"
                  key={key}
                  onClick={() => {
                    props.setSelectedName(filteredData[key].name);
                    clearInput();
                  }}
                >
                  <p>{value.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <SearchResult
        Pname={props.selectedName}
        setName={props.setSelectedName}
      />
    </>
  );
}
export default searchBar;
