import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import MovieCard from './MovieCard';
// import NextArrow from './NextArrow';
// import PrevArrow from './PrevArrow';
const Carousel = ({ data, onPosterClick, width }) => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow:
			(width >= 1300 && 4) ||
			(width >= 1000 && width < 1300 && 3) ||
			(width < 1000 && 2),
		slidesToScroll: 3,
		// prevArrow: <PrevArrow />,
		// nextArrow: <NextArrow />,
		// prevArrow: <PrevArrow onClick={() => {}} className="" />,
		// nextArrow: <NextArrow onClick={() => {}} className="" />,

		initialSlide: 0,
		arrows: true,
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 3,
		// 			slidesToScroll: 3,
		// 			infinite: true,
		// 			dots: true,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2,
		// 			initialSlide: 2,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 520,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2,
		// 			arrows: false,
		// 		},
		// 	},
		// ],
	};

	return (
		<div>
			<Slider {...settings}>
				{data.map((movie) => (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster={movie.poster}
						type={movie.type}
						width={300}
						height={450}
						onButtonClick={onPosterClick}
					/>
				))}
			</Slider>
		</div>
	);
};
export default Carousel;
