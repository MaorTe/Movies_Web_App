import { Link } from 'react-router-dom';
import AddOrRemoveBtn from './AddOrRemoveBtn';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const MovieCard = ({ title, poster, id, type, onButtonClick, width }) => {
	return (
		<div className="movie-card-container">
			<Link to={`/MovieDetails/${type}/${id}`}>
				{/* <img src={poster} className="img-select" alt="" width={width} /> */}
				<LazyLoadImage
					alt={''}
					src={poster} // use normal <img> attributes as props
					width={width}
					className="img-select"
					// height={100}
				/>
			</Link>
			<div className="font-small">{title}</div>
			<AddOrRemoveBtn
				id={id}
				title={title}
				poster={poster}
				type={type}
				onButtonClick={onButtonClick}
			/>
		</div>
	);
};

export default MovieCard;
