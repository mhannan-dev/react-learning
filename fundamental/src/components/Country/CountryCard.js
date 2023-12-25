import React from 'react'
const CountryCard = ({ country, onDelete }) => {
    return (
        <>
            <div key={country.cca3} className="col-md-3 p-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{country.name.common} </h5>
                        <img height='150' className='img-fluid border border-grey rounded-3 w-100 p-3' src={country.flags.png} />
                        <p className="card-text">{ country.ccn3}</p>
                        <p className="card-text">{ country.cca2}</p>
                        <button className="btn btn-danger" onClick={() => onDelete(country.cca3)}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CountryCard
