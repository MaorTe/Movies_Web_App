import React, { useEffect, useState } from 'react';
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

			// const findMovie = data.find((item) => item.id === id);
			// if (!findMovie) {
			// 	props.history.push('/products');
			// }
			const { data } = await API.get(
				`3/${type}/${movieId}?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US`
			);

			setMovie({
				id: data.id,
				title: data.title || data.name,
				bgPoster: data.backdrop_path || null,
				releaseDate: data.release_date || data.first_air_date,
				genre: data.genres.map((el) => el.name).join(' | '),
				logoPath: data.production_companies[0].logo_path || null,
				summary: data.overview,
			});
		};
		FetchData();
	}, []);

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
				<div className="movie-title">{movie.title}</div>
				<div>{movie.releaseDate}</div>
				<div>{movie.genre}</div>
				{movie.logoPath && (
					<img
						src={`https://image.tmdb.org/t/p/original${movie.logoPath}`}
						alt=""
						width="200"
					/>
				)}
				<div>{movie.summary}</div>

				<AddOrRemoveBtn
					id={movie.id}
					title={movie.title}
					poster={movie.logoPath}
					type={movie.type}
					onButtonClick={onButtonClick}
				/>
			</div>
		);
	}
	return null;
};

export default MovieDetails;
