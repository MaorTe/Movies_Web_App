import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
	const [watchlist, setWatchlist] = useState([]);
	const tableData = JSON.parse(localStorage.getItem('tableData'));
	//iterate over the local storage and set items to watchlist
	useEffect(() => {
		const fetchLocalData = () => {
			const tableData = JSON.parse(localStorage.getItem('tableData'));
			console.log(tableData.length);
			setWatchlist(tableData.map((el) => el));
		};
		fetchLocalData();
	}, [tableData.length]);

	const onButtonClick = () => {
		const tableData = JSON.parse(localStorage.getItem('tableData'));
		setWatchlist(tableData.map((el) => el));
	};
	return (
		<div className="grid-container">
			{watchlist.map((movie, index) => (
				<MovieCard
					key={index}
					id={movie.id}
					title={movie.title}
					poster={movie.poster}
					type={movie.type}
					onButtonClick={onButtonClick}
				/>
			))}
		</div>
	);
};

export default Watchlist;
