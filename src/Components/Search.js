import React, { useState } from "react";

const Search = (props) => {
  const [searchVal, setSearchVal] = useState("");

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };
  const callSearch = (e) => {
    e.preventDefault();
    if(searchVal!==''){
        props.search(searchVal);
    }else{
        alert("Please Enter a value")
    }
    
  };

  return (
    <form className="search">
      <input type="text" value={searchVal} onChange={handleChange} />
      <input onClick={callSearch} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
