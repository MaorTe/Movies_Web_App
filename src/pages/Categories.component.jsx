import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/API';
import MovieCard from '../components/MovieCard';
import MyLoader from '../components/MyLoader';
import ScrollArrow from '../components/ScrollArrow';

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

	// const mobileCheck=()=>{
	// 	if(window.innerWidth){
	// 		return (<MyLoader /><MyLoader />)
	// 	}
	// }
	return (
		<>
			<div className="grid-container">
				{console.log(window.innerWidth)}
				{movies.map((movie, index) => (
					<MovieCard
						key={index}
						id={movie.id}
						title={movie.title}
						poster={movie.poster}
						type={movie.type}
						width={250}
						onButtonClick={onPosterClick}
					/>
				))}
				<ScrollArrow></ScrollArrow>
				{window.innerWidth < 520 ? (
					<>
						<span ref={loader}>
							{/* <MyLoader /> */}
							<h2>Loading...</h2>
						</span>
						{/* <MyLoader /> */}
					</>
				) : (
					<>
						<MyLoader />
						<MyLoader />
						<span ref={loader}>
							<MyLoader />
						</span>
						<MyLoader />
					</>
				)}
			</div>
		</>
	);
};
export default Categories;
