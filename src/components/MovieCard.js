import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, poster, id, onPosterClick }) => {
	return (
		<div className="">
			<Link to={`/MovieDetails/${id}`} onClick={() => ' fetchMovieById(id)'}>
				<img src={poster} alt="" width="300" />
			</Link>
			<div>{title}</div>
			{/* <Link to="/products"> */}
			<button onClick={onPosterClick}>Add To Watchlist</button>
			{/* </Link> */}
		</div>
	);
};

export default MovieCard;
