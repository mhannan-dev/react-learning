import React from 'react'

const CountryCard = ({ country }) => {
    return (
        <>
            <div key={country.cca3} className="col-md-3 p-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{country.name.common}</h5>
                        <p className="card-text">Some quick example text...</p>
                        <p className="card-text">Some more example text...</p>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryCard
