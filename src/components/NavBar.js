import { Link } from 'react-router-dom';

const NavBar = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/Watchlist">Watchlist</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
