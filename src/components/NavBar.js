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
					<img src={logo} alt="" width="115" />
					{/* </Link> */}
				</li>
				<li>
					<Link to="/">
						<h3>Home</h3>
					</Link>
				</li>
				<li>
					<Link to="/Watchlist">
						<h3>Watchlist</h3>
					</Link>
				</li>
			</ul>
			<Search></Search>
		</div>
	);
};

export default NavBar;
