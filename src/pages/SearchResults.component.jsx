import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/API';
import MovieCard from '../components/MovieCard';

const SearchResults = () => {
	const [results, setResults] = useState([]);
	const params = useParams();
	console.log(params);
	// @ts-ignore
	const query = params.query;
	useEffect(() => {
		const search = async () => {
			const { data } = await API.get(
				`3/search/movie?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&query=${query}&page=1&include_adult=false`
			);
			setResults(
				[...data.results].map((el) => {
					return {
						id: el.id,
						title: el.title,
						poster:
							(el.poster_path &&
								`https://image.tmdb.org/t/p/original${el.poster_path}`) ||
							`https://ofilmdb.com/assets/img/cover.jpg`,
						type: 'movie',
					};
				})
			);
		};
		search();
	}, [query]);

	const onPosterClick = (movieID) => {
		console.log(movieID);
	};
	return (
		<div className="grid-container">
			{results.map((movie, index) => (
				<MovieCard
					key={index}
					id={movie.id}
					title={movie.title}
					poster={movie.poster}
					type={movie.type}
					width={200}
					onButtonClick={onPosterClick}
				/>
			))}
		</div>
	);
};

export default SearchResults;
