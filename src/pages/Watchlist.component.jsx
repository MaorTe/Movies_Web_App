import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Watchlist = () => {
	const [watchlist, setWatchlist] = useState([]);

	//iterate over the local storage and set items to watchlist
	useEffect(() => {
		const fetchLocalData = () => {
			const tableData = JSON.parse(localStorage.getItem('tableData'));
			setWatchlist(tableData.map((el) => el));
		};
		fetchLocalData();
	}, [watchlist]);

	//remove item by finding the id
	const onRemoveItem = () => {
		const tableData = JSON.parse(localStorage.getItem('tableData'));
		tableData.splice('index', 1);
		tableData.forEach((person, index) => {
			person.id = index;
		});
		localStorage.setItem('tableData', JSON.stringify(tableData));
	};

	return (
		<div className="">
			<Link to={`/MovieDetails/${'id'}`} onClick={() => ' fetchMovieById(id)'}>
				<img src={'poster'} alt="" width="300" />
			</Link>
			<div>{'title'}</div>
			{/* <Link to="/products"> */}
			<button onClick={() => onRemoveItem()}>Remove from Watchlist</button>
			{/* </Link> */}
		</div>
	);
};

export default Watchlist;
