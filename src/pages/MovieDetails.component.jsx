import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../api/API';

const MovieDetails = ({ onPosterClick }) => {
	const [movie, setMovie] = useState({});
	const params = useParams();
	useEffect(() => {
		const FetchData = async () => {
			// try {
			// @ts-ignore
			const movieId = Number(params.id);
			// const findMovie = data.find((item) => item.id === id);
			// if (!findMovie) {
			// 	props.history.push('/products');
			// }
			const { data } = await API.get(
				`3/movie/${movieId}?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US`
			);
			console.log(data);
			setMovie({
				id: data.id,
				title: data.title,
				bgPoster: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
				releaseDate: data.release_date,
				genre: data.genres,
				logoPath: `https://image.tmdb.org/t/p/original${data.logo_path}`,
				summary: data.overview,
			});
			// ****SIDE NOTE**** good react way to turn all object values into an array of each value
			// const dataArray = Object.keys(data).map((key) => ({ [key]: data[key] }));

			// setMovie(
			// 	dataArray.map((el) => ({
			// 		id: el.id,
			// 		title: el.title,
			// 	}))
			// );
			// ****SIDE NOTE endpoint****

			// } catch (e) {
			// 	console.log(e.message);
			// }
		};
		FetchData();
	}, []);
	console.log(movie);
	// console.log(movie.year.splice(0, 4));
	return (
		<div
			className="movie-page"
			style={
				{
					// backgroundImage: `url(${movie.bgPoster})`,
				}
			}>
			<img src={'poster'} alt="" width="300" />

			{/* <div>{movie.title}</div> */}
			{/* <div>{movie.year}</div> */}
			{/* <div>{movie.genre}</div> */}
			{/* <div>{'director'}</div> */}
			{/* <div>{'cast'}</div> */}
			<div>{'summary'}</div>
			<Link to="/products">
				<button onClick={onPosterClick}>Add To Watchlist</button>
			</Link>
		</div>
	);
};

export default MovieDetails;
