import React from 'react'

const Search = () => {
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
          />
        </div>
      </div>
      <hr/>
    </>
  )
}

export default Search
