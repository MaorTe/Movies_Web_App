import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage.component';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import NotFound from './pages/NotFound.component';

function App() {
	// const API_KEY = 'apikey=1ff185cc';
	return (
		<div>
			<Router>
				<NavBar className="navbar" />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/products/:id" component={ProductDetail} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
