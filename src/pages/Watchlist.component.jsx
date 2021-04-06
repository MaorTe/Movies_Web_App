import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

	//remove item by finding the id
	const onRemoveItem = () => {
		const tableData = JSON.parse(localStorage.getItem('tableData'));

		// tableData.splice('index', 1);
		// tableData.forEach((person, index) => {
		// 	person.id = index;
		// });
		localStorage.setItem('tableData', JSON.stringify(tableData));
	};
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
