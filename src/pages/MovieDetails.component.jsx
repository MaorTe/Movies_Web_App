import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../store';
const MovieDetails = ({ title, poster, onPosterClick }) => {
	const [product, setProduct] = useState(null);
	// https://image.tmdb.org/t/p/original/jMWkd0fuwbG39eJpzycJzPWMCww.jpg
	return (
		<div className="movie-page">
			<img src={poster} alt="" width="300" />
			<div>{title}</div>
			<Link to="/products">
				<button onClick={onPosterClick}>Add To Watchlist</button>
			</Link>
		</div>
	);
};

export default MovieDetails;
