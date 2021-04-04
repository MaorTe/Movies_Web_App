import React, { useEffect, useState } from 'react';
import API from '../api/API';
import MovieCard from '../components/MovieCard';

const Homepage = () => {
	// https://api.themoviedb.org/3/movie/top_rated?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&page=1
	const [data, setData] = useState(null);

	useEffect(() => {
		const FetchData = async () => {
			try {
				const { data } = await API.get(
					'3/movie/top_rated?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&page=1'
				);
				setData([data]);
			} catch (e) {
				console.error(e.message);
			}
		};
		FetchData();
	}, []);
	return (
		<div className="homepage">
			<h1>Movies-Top</h1>
			<div className="grid-container">
				<MovieCard></MovieCard>
			</div>
		</div>
	);
};
export default Homepage;
