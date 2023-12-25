import React, {useState} from 'react'

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm ] =  useState();
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchTerm(value);
    onSearch(value);
  }
    return (
    <>
      <div className="app-header d-flex justify-content-between">
        <div className="app-heading">
          <h2 className="text-center">Country app using React JS</h2>
        </div>
        <div className="app-search">
          <input
            type="text"
            className="form-control"
            placeholder="Search by country name"
            value={searchTerm}
            onChange={handleChange}

          />
        </div>
      </div>
      <hr/>
    </>
  )
}

export default Search
