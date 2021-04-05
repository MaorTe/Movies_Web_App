import { Link } from 'react-router-dom';

const MovieCard = ({ title, poster, id, onPosterClick }) => {
	const onPosterClick1 = () => {
		const tableData = JSON.parse(localStorage.getItem('tableData'));
		tableData.push({
			id,
			title,
			poster,
		});
		localStorage.setItem('tableData', JSON.stringify(tableData));
	};
	return (
		<div className="">
			<Link to={`/MovieDetails/${id}`} onClick={() => ' fetchMovieById(id)'}>
				<img src={poster} alt="" width="300" />
			</Link>
			<div>{title}</div>
			{/* <Link to="/products"> */}
			<button onClick={() => onPosterClick1()}>Add To Watchlist</button>
			{/* </Link> */}
		</div>
	);
};

export default MovieCard;
