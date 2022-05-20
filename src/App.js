import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage.component';
import NotFound from './pages/NotFound.component';
import { useEffect } from 'react';
import MovieDetails from './pages/MovieDetails.component';
import Watchlist from './pages/Watchlist.component';
import SearchResults from './pages/SearchResults.component';
import Categories from './pages/Categories.component';

function App() {
	// const API_KEY = 'apikey=1ff185cc';
	// const [topRatedMovies, setTopRatedMovies] = useState([]);
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
				<Routes>
					{/* <Route
						path="/dashboard"
						render={(props) => <Homepage {...props} topRated={data} />}
					/> */}

					<Route
						exact
						path="/"
						element={<Homepage />}
						// component={() => <Homepage movieData={topRatedMovies} />}
					/>
					<Route exact path="/Watchlist" element={<Watchlist />} />
					<Route
						exact
						path="/MovieDetails/:type/:id"
						element={<MovieDetails />}
					/>
					<Route
						exact
						// movies/latest/page/1
						// path="/Categories/:type/:top/:id"
						path="/Categories/:type"
						element={<Categories />}
					/>
					<Route
						exact
						path="/SearchResults/:type/q=:query"
						element={<SearchResults />}
					/>
					<Route element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
