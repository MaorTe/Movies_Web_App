import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from '../img/logo.png';
const NavBar = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				<li>
					{/* <Link to="/"> */}
					<img src={logo} alt="" width="100" />
					{/* </Link> */}
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/Watchlist">Watchlist</Link>
				</li>
			</ul>
			<Search></Search>
		</div>
	);
};

export default NavBar;
