import { Link } from 'react-router-dom';

const NavBar = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/products">products</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
