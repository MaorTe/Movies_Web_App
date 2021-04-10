import React, { useState, useEffect } from 'react';
import MyUtilFunc from '../utils/MyUtilFunc';

const AddOrRemoveBtn = ({ id, poster, title, type, onButtonClick }) => {
	const [isExist, setIsExist] = useState(null);

	useEffect(() => {
		const buttonInit = () => {
			const tableData = JSON.parse(localStorage.getItem('tableData'));
			const isIdExist = tableData.findIndex((el) => el.id === id);

			isIdExist === -1 ? setIsExist(false) : setIsExist(true);
		};
		buttonInit();
	}, [isExist]);

	const onPosterClick = () => {
		!isExist
			? setIsExist(MyUtilFunc(id, poster, title, type))
			: setIsExist(removeMovie());
		onButtonClick();
	};
	const removeMovie = () => {
		const tableData = JSON.parse(localStorage.getItem('tableData'));
		const indexId = tableData.findIndex((el) => el.id === id);
		tableData.splice(indexId, 1);
		localStorage.setItem('tableData', JSON.stringify(tableData));
		return false;
	};
	return (
		<div className="flex-center">
			<button className="btn third" onClick={() => onPosterClick()}>
				{isExist ? 'Remove from Watchlist' : 'Add To Watchlist'}
			</button>
		</div>
	);
};

export default AddOrRemoveBtn;
