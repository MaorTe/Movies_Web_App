import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../api/API';

const MovieDetails = ({ onPosterClick }) => {
	const [movie, setMovie] = useState({
		id: '',
		title: '',
		bgPoster: '',
		releaseDate: '',
		genre: '',
		logoPath: '',
		summary: '',
	});
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
			// Object.keys(data.production_companies[0].logo_path).forEach((el) =>
			// 	console.log(el)
			// );
			setMovie({
				id: data.id,
				title: data.title,
				bgPoster: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
				releaseDate: data.release_date,
				genre: data.genres.map((el) => el.name).join(' | '),
				logoPath: `https://image.tmdb.org/t/p/original${data.production_companies[0].logo_path}`,
				summary: data.overview,
			});
		};
		FetchData();
	}, []);

	return (
		<div
			className="movie-details-container"
			style={{
				background: `url(${movie.bgPoster}) no-repeat center center/cover`,
			}}>
			<div className="movie-title">{movie.title}</div>
			<div>{movie.releaseDate.slice(0, 4)}</div>
			<div>{movie.genre}</div>
			{/* <div>{'director'}</div> */}
			<img src={movie.logoPath} alt="" width="200" />
			<div>{movie.summary}</div>
			<Link to="/products">
				<button onClick={onPosterClick}>Add To Watchlist</button>
			</Link>
		</div>
	);
};

export default MovieDetails;
