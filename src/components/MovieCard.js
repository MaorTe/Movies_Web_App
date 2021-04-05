import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, poster, onPosterClick }) => {
	// const [product, setProduct] = useState(null);
	// useEffect(() => {
	// 	const id = Number(props.match.params.id);
	// 	const findProduct = data.find((item) => item.id === id);
	// 	if (!findProduct) {
	// 		// props.history.push('/products');
	// 	}
	// 	// this.setState({ product: findProduct });
	// 	setProduct(findProduct);
	// }, []);

	return (
		<div className="">
			<Link to="/products">
				<img src={poster} alt="" width="300" />
			</Link>
			<div>{title}</div>
			{/* <Link to="/products"> */}
			<button onClick={onPosterClick}>Add To Watchlist</button>
			{/* </Link> */}
		</div>
	);
};

export default MovieCard;
