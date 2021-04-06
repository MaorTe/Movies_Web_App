const MyUtilFunc = (id, poster, title, type) => {
	const tableData = JSON.parse(localStorage.getItem('tableData'));
	const isIdExists = tableData.findIndex((el) => el.id === id);
	console.log(isIdExists);

	isIdExists === -1 &&
		tableData.push({
			id,
			title,
			poster,
			type,
		});
	localStorage.setItem('tableData', JSON.stringify(tableData));
	return isIdExists === -1;
};
export default MyUtilFunc;
