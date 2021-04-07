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
	console.log(query);
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
						poster: `https://image.tmdb.org/t/p/original${el.poster_path}`,
						type: 'movie',
					};
				})
			);
		};
		search();
	}, [query]);

	// const renderedResults = results.map((result) => {
	// 	return (
	// 		<div key={result.pageid} className="item">
	// 			<div className="right floated content">
	// 				<a
	// 					className="ui button"
	// 					href={`https://en.wikipedia.org?curid=${result.pageid}`}>
	// 					Go
	// 				</a>
	// 			</div>
	// 			<div className="content">
	// 				<div className="header">{result.title}</div>
	// 				<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
	// 			</div>
	// 		</div>
	// 	);
	// });

	return (
		<div className="grid-container">
			{results.map((movie, index) => (
				<MovieCard
					key={index}
					id={movie.id}
					title={movie.title}
					poster={movie.poster}
					type={movie.type}
					onButtonClick={'onPosterClick'}
				/>
			))}
		</div>
	);
};

export default SearchResults;
