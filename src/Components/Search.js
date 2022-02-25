import React, {useState} from 'react'


const Search=(props)=>{

    const [searchVal,setSearchVal]=useState("");

    const handleChange=(e)=>{
        setSearchVal(e.target.value)
    }
    const callSearch = (e) => {
        e.preventDefault();
        props.search(searchVal);
        setSearchVal("");
      }

    return(

        <form>
            <input type="text" value={searchVal} onChange={handleChange} />
            <input onClick={callSearch} type="submit" value="SEARCH" />
        </form>
    )
}

export default Search;