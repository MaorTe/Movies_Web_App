import React from 'react';
import { Link } from 'react-router-dom';
import data from '../store';
class ProductDetail extends React.Component {
	state = { product: null };
	componentDidMount() {
		const id = Number(this.props.match.params.id);
		const findProduct = data.find((item) => item.id === id);
		if (!findProduct) {
			this.props.history.push('/products');
		}
		this.setState({ product: findProduct });
	}
	render() {
		return (
			this.state.product && (
				<div
					style={{ display: 'flex', flexDirection: 'column', margin: '15px' }}>
					<div>{this.state.product.title}</div>
					<div>{this.state.product.price}</div>
					<div>{this.state.product.size}</div>
					<img
						src={this.state.product.imageUrl}
						alt=""
						height="200"
						width="200"
					/>
					<Link to="/products">
						<button>Back</button>
					</Link>
				</div>
			)
		);
	}
}
export default ProductDetail;
