import React, { useState, useEffect } from 'react';
import MyUtilFunc from '../utils/MyUtilFunc';

const AddOrRemoveBtn = ({ id, poster, title, type, onButtonClick }) => {
	const [isExist, setIsExist] = useState(null);

	useEffect(() => {
		// console.log(isExist);
		const buttonInit = () => {
			const tableData = JSON.parse(localStorage.getItem('tableData'));
			const isIdExist = tableData.findIndex((el) => el.id === id);

			isIdExist === -1 ? setIsExist(false) : setIsExist(true);
		};
		buttonInit();
	}, []);

	const onPosterClick1 = () => {
		!isExist
			? setIsExist(MyUtilFunc(id, poster, title, type))
			: setIsExist(removeMovie());
		onButtonClick();
		// setButtonName(!buttonName);
	};
	const removeMovie = () => {
		const tableData = JSON.parse(localStorage.getItem('tableData'));
		const indexId = tableData.findIndex((el) => el.id === id);
		tableData.splice(indexId, 1);
		localStorage.setItem('tableData', JSON.stringify(tableData));
		return false;
	};
	return (
		<button onClick={() => onPosterClick1()}>
			{isExist ? 'Remove from Watchlist' : 'Add To Watchlist'}
		</button>
	);
};

export default AddOrRemoveBtn;
