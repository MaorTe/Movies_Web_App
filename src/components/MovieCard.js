import { Link } from 'react-router-dom';
import AddOrRemoveBtn from './AddOrRemoveBtn';

const MovieCard = ({ title, poster, id, type, onButtonClick }) => {
	return (
		<div style={{ height: 600 }}>
			<Link to={`/MovieDetails/${type}/${id}`}>
				<img src={poster} className="img-select" alt="" width="300" />
			</Link>
			<div>{title}</div>
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
