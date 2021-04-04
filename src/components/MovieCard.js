import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../store';
const MovieCard = (props) => {
	// state = { product: null };
	const [product, setProduct] = useState(null);
	useEffect(() => {
		const id = Number(props.match.params.id);
		const findProduct = data.find((item) => item.id === id);
		if (!findProduct) {
			props.history.push('/products');
		}
		// this.setState({ product: findProduct });
		setProduct(findProduct);
	}, []);

	return (
		product && (
			<div style={{ display: 'flex', flexDirection: 'column', margin: '15px' }}>
				<div>{product.title}</div>
				<div>{product.price}</div>
				<div>{product.size}</div>
				<img src={product.imageUrl} alt="" height="200" width="200" />
				<Link to="/products">
					<button>Back</button>
				</Link>
			</div>
		)
	);
};

export default MovieCard;
