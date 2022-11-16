import React from 'react';

const MovieList = (props) => {


        return (
            <div className="row">

                {props.movies.map((movie, i) => (

                    <div className="col-lg-3" key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text" style={ {minHeight : '150px'}}>{(movie.overview)}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="btn btn-outline-danger">{movie.rating}</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        )
}

export default MovieList;