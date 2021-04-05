// import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img
		src="https://image.tmdb.org/t/p/w500/jMWkd0fuwbG39eJpzycJzPWMCww.jpg"
		alt=""
		onDragStart={handleDragStart}
	/>,
	<img
		src="https://image.tmdb.org/t/p/w500/jMWkd0fuwbG39eJpzycJzPWMCww.jpg"
		alt=""
		onDragStart={handleDragStart}
	/>,
	<img
		src="https://image.tmdb.org/t/p/w500/jMWkd0fuwbG39eJpzycJzPWMCww.jpg"
		alt=""
		onDragStart={handleDragStart}
	/>,
	<img
		src="https://image.tmdb.org/t/p/w500/jMWkd0fuwbG39eJpzycJzPWMCww.jpg"
		alt=""
		onDragStart={handleDragStart}
	/>,
	<img
		src="https://image.tmdb.org/t/p/w500/jMWkd0fuwbG39eJpzycJzPWMCww.jpg"
		alt=""
		onDragStart={handleDragStart}
	/>,
	<img
		src="https://image.tmdb.org/t/p/w500/jMWkd0fuwbG39eJpzycJzPWMCww.jpg"
		alt=""
		onDragStart={handleDragStart}
	/>,
];

const DemoCarousel = () => {
	return (
		<div>
			<AliceCarousel
				mouseTracking
				items={items}
				paddingLeft={50}
				paddingRight={50}
				autoWidth={true}
			/>
		</div>
	);
};
export default DemoCarousel;
