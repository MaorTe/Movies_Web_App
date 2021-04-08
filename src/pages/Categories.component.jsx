import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/API';
// import MovieCard from '../components/MovieCard';
import MovieCard from '../components/MovieCard';
import ScrollArrow from '../components/ScrollArrow';
// import InfiniteScroll from './InfiniteScroll.component';
// import MovieCard from '../components/MovieCard';

const Categories = () => {
	// tracking on which page we currently are
	const [page, setPage] = useState(0);
	// add loader reference
	const loader = useRef(null);

	const [movies, setMoviesTop] = useState([]);
	const params = useParams();

	useEffect(() => {
		var options = {
			root: null,
			rootMargin: '20px',
			threshold: 1.0,
		};
		// initialize IntersectionObserver
		// and attaching to Load More div
		const observer = new IntersectionObserver(handleObserver, options);
		if (loader.current) {
			observer.observe(loader.current);
		}
	}, []);

	useEffect(() => {
		const FetchData = async () => {
			// try {
			// @ts-ignore
			const type = params.type;
			const dataMovies = await API.get(
				`3/${type}/top_rated?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&page=${page}`
			);
			const movieArr = [...dataMovies.data.results].map((el) => {
				return {
					id: el.id,
					title: el.title || el.name,
					poster: `https://image.tmdb.org/t/p/original${el.poster_path}`,
					type: type === 'movie' ? 'movie' : 'tv',
				};
			});
			setMoviesTop([...movies, ...movieArr]);
			// } catch (e) {
			// 	console.log(e.message);
			// }
		};
		FetchData();
	}, [page]);

	// here we handle what happens when user scrolls to Load More div
	// in this case we just update page variable
	const handleObserver = (entities) => {
		const target = entities[0];
		if (target.isIntersecting) {
			setPage((page) => page + 1);
		}
	};

	const onPosterClick = (movieID) => {
		console.log(movieID);
	};

	return (
		<div className="grid-container">
			{movies.map((movie, index) => (
				<MovieCard
					key={index}
					id={movie.id}
					title={movie.title}
					poster={movie.poster}
					type={movie.type}
					onButtonClick={onPosterClick}
				/>
			))}
			<ScrollArrow></ScrollArrow>
			<div className="loading" ref={loader}>
				<h2>Loading...</h2>
			</div>
		</div>
	);
};
export default Categories;
