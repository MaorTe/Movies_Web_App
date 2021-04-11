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
	// @ts-ignore
	const type = params.type;
	useEffect(() => {
		const search = async () => {
			const { data } = await API.get(
				`3/search/${type}?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&query=${query}&page=1&include_adult=false`
			);

			console.log(data);
			// '3/search/multi?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&query=hunter&page=1&include_adult=false'
			setResults(
				[...data.results].map((el) => {
					return {
						id: el.id,
						title: el.title || el.name,
						poster:
							(el.poster_path &&
								`https://image.tmdb.org/t/p/original${el.poster_path}`) ||
							`https://ofilmdb.com/assets/img/cover.jpg`,
						type: type,
					};
				})
			);
		};
		search();
	}, [query, type]);

	const onPosterClick = (movieID) => {
		console.log(movieID);
	};
	return (
		<div className="grid-container">
			{results.length ? (
				results.map((movie, index) => (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster={movie.poster}
						type={movie.type}
						width={200}
						height={300}
						onButtonClick={onPosterClick}
					/>
				))
			) : (
				<h1>No results</h1>
			)}
		</div>
	);
};

export default SearchResults;
