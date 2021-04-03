import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
class Products extends React.Component {
	state = { data: [] };
	componentDidMount() {
		this.setState({ data: store });
	}
	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					margin: '15px',
				}}>
				{this.state.data.map((el, i) => {
					return (
						<div key={i}>
							<Link to={`${this.props.location.pathname}/${el.id}`} key={el.id}>
								{el.title}
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}
export default Products;
