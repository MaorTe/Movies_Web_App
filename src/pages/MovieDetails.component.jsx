import React, { useEffect, useState } from 'react';
import { FaImdb, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import API from '../api/API';
import AddOrRemoveBtn from '../components/AddOrRemoveBtn';

const MovieDetails = ({ onButtonClick }) => {
	const [movie, setMovie] = useState(null);
	const params = useParams();
	useEffect(() => {
		const FetchData = async () => {
			// try {
			// @ts-ignore
			const movieId = Number(params.id);
			// @ts-ignore
			const type = params.type;
			const { data } = await API.get(
				`3/${type}/${movieId}?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US`
			);
			console.log(data);
			setMovie({
				id: data.id,
				title: data.title || data.name,
				poster: data.poster_path,
				bgPoster: data.backdrop_path || null,
				logoPath:
					data.production_companies.length > 0
						? data.production_companies[0].logo_path
						: null,
				releaseDate: data.release_date || data.first_air_date,
				genre: data.genres.map((el) => el.name).join(' | '),
				summary: data.overview,
				type: type,
				rate: data.vote_average,
				imdb: data.imdb_id
					? `https://www.imdb.com/title/${data.imdb_id}`
					: data.homepage,
			});
		};
		FetchData();
	}, []);

	const onPosterClick = (movieID) => {
		console.log(movieID);
	};
	if (movie) {
		return (
			<div className="movie-details-container">
				<div
					className="bg-filter"
					style={{
						backgroundImage:
							(movie.bgPoster &&
								`url(https://image.tmdb.org/t/p/original${movie.bgPoster})`) ||
							`red`,
					}}></div>
				<div className="movie-details-content">
					<h1 className="movie-title textbox">{movie.title}</h1>

					<AddOrRemoveBtn
						id={movie.id}
						title={movie.title}
						poster={`https://image.tmdb.org/t/p/original${movie.poster}`}
						type={movie.type}
						onButtonClick={onButtonClick || onPosterClick}
					/>
					<div className="flex-start">
						{movie.releaseDate.slice(0, 4)}
						<a href={movie.imdb} target="_blank" rel="noreferrer">
							{<FaImdb className="plusIcon"></FaImdb>}
						</a>
						{movie.rate}
						{<FaStar className="plusIcon star"></FaStar>}
					</div>
					<div>{movie.genre}</div>
					{movie.logoPath && (
						<img
							src={`https://image.tmdb.org/t/p/original${movie.logoPath}`}
							alt=""
							width="200"
							className="margin-top"
						/>
					)}

					<details>
						<summary className="more-info">Show More +</summary>
						<p>{movie.summary}</p>
					</details>
				</div>
			</div>
		);
	}
	return null;
};

export default MovieDetails;
