import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage.component';
import Products from './components/Products';
// import MovieCard from './components/MovieCard';
import NotFound from './pages/NotFound.component';
import { useEffect, useState } from 'react';
import API from './api/API';

function App() {
	// const API_KEY = 'apikey=1ff185cc';
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	return (
		<div>
			<Router>
				<NavBar className="navbar" />
				<Switch>
					{/* <Route
						path="/dashboard"
						render={(props) => <Homepage {...props} topRated={data} />}
					/> */}
					<Route
						exact
						path="/"
						component={Homepage}
						// component={() => <Homepage movieData={topRatedMovies} />}
					/>
					<Route exact path="/products" component={Products} />
					{/* <Route exact path="/products/:id" component={MovieCard} /> */}
					<Route component={NotFound} />
				</Switch>
			</Router>
			{topRatedMovies}
		</div>
	);
}

export default App;
