import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../api/API';
import AddOrRemoveBtn from '../components/AddOrRemoveBtn';
import MyUtilFunc from '../utils/MyUtilFunc';
import MyUtilFunc2 from '../utils/MyUtilFunc2';

const MovieDetails = ({ onButtonClick }) => {
	const [movie, setMovie] = useState(
		null
		// {
		// id: '',
		// title: '',
		// bgPoster: '',
		// releaseDate: '',
		// genre: '',
		// logoPath: '',
		// summary: '',
		// }
	);
	// const [buttonName, setButtonName] = useState(false);
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

			console.log(data);
			const test = data?.production_companies[0]?.logo_path;
			console.log('is ---', test);

			// --------
			setMovie({
				id: data.id,
				title: data.title || data.name,
				bgPoster: data.backdrop_path || null,
				releaseDate: data.release_date || data.first_air_date,
				genre: data.genres.map((el) => el.name).join(' | '),
				logoPath: data.production_companies[0].logo_path || null,
				// logoPath: `
				// ${
				// 	(data?.production_companies[0]?.logo_path &&
				// 		`https://image.tmdb.org/t/p/original${data.production_companies[0].logo_path}`) ||
				// 	null
				// }`,
				summary: data.overview,
			});

			// setButtonName(MyUtilFunc2(movie.id));
		};
		FetchData();
	}, []);

	// const onPosterClick = () => {
	// 	const tableData = JSON.parse(localStorage.getItem('tableData'));
	// 	tableData.push({
	// 		id,
	// 		title,
	// 		poster,
	// 	});
	// 	localStorage.setItem('tableData', JSON.stringify(tableData));
	// };

	const onPosterClick1 = () => {
		// setButtonName(MyUtilFunc(movie.id, movie.logoPath, movie.title));
	};
	// `https://image.tmdb.org/t/p/original
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
				{/* <div>{'director'}</div> */}
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
