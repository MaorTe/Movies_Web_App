import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

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
			<div>
				<Search></Search>
			</div>
		</div>
	);
};

export default NavBar;
