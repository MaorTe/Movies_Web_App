import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import MovieCard from './MovieCard';
// import NextArrow from './NextArrow';
// import PrevArrow from './PrevArrow';
const Carousel = ({ data, onPosterClick }) => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		// prevArrow: <PrevArrow />,
		// nextArrow: <NextArrow />,
		// prevArrow: <PrevArrow onClick={() => {}} className="" />,
		// nextArrow: <NextArrow onClick={() => {}} className="" />,

		//
		initialSlide: 0,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<Slider {...settings}>
				{data.map((movie, index) => (
					<MovieCard
						key={index}
						id={movie.id}
						title={movie.title}
						poster={movie.poster}
						type={movie.type}
						onButtonClick={onPosterClick}
					/>
				))}
			</Slider>
		</div>
	);
};
export default Carousel;
