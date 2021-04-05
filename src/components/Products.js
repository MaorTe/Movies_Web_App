import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import MultipleItems from './Carousel';
const Products = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(store);
	}, []);

	return (
		<div>{/* <MultipleItems></MultipleItems> */}</div>
		// <div
		// 	style={{
		// 		display: 'flex',
		// 		flexDirection: 'row',
		// 		margin: '15px',
		// 	}}>

		// 	{data.map((el, i) => {
		// 		return (
		// 			<div key={i}>
		// 				<Link to={`${props.location.pathname}/${el.id}`} key={el.id}>
		// 					{el.title}
		// 				</Link>
		// 			</div>
		// 		);
		// 	})}
		// </div>
	);
};
export default Products;
