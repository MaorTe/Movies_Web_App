import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage.component';
import Products from './components/Products';
import MovieCard from './components/MovieCard';
import NotFound from './pages/NotFound.component';
import { useEffect, useState } from 'react';
import API from './api/API';
import MovieDetails from './pages/MovieDetails.component';

function App() {
	// const API_KEY = 'apikey=1ff185cc';
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	useEffect(() => {
		const createLocalStorage = () => {
			if (!Array.isArray(JSON.parse(localStorage.getItem('tableData')))) {
				localStorage.setItem('tableData', JSON.stringify([]));
				// loadingTitle.classList.remove('hidden');
				// setTimeout(() => {
				// 	const tableData = renderData();
				// 	loadingTitle.classList.add('hidden');
				// localStorage.setItem(`tableData`, JSON.stringify(tableData));
				// }, 10000);
			}
		};
		createLocalStorage();
	}, []);
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
					<Route exact path="/MovieDetails/:id" component={MovieDetails} />
					<Route component={NotFound} />
				</Switch>
			</Router>
			{topRatedMovies}
		</div>
	);
}

export default App;
