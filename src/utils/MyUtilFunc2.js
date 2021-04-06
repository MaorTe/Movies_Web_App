const MyUtilFunc2 = (id) => {
	const tableData = JSON.parse(localStorage.getItem('tableData'));
	const isIdExists = tableData.find((el) => el.id === id && id);
	// localStorage.setItem('tableData', JSON.stringify(tableData));
	return !isIdExists ? true : false;
};
export default MyUtilFunc2;
