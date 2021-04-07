import React, { Component, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const ScrollComponent = () => {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(0);
	const [prevY, setPrevY] = useState(0);
	// add loader refrence
	const loadingRef = useRef(null);
	useEffect(() => {
		const func = () => {
			getPhotos(page);
			let options = {
				root: null,
				rootMargin: '0px',
				threshold: 1.0,
			};

			const observer = new IntersectionObserver(handleObserver, options);
			if (loadingRef.current) {
				observer.observe(loadingRef.current);
			}
		};
		func();
	});

	const handleObserver = (entities, observer) => {
		const y = entities[0].boundingClientRect.y;
		if (prevY > y) {
			const lastPhoto = photos[photos.length - 1];
			console.log(lastPhoto);
			const curPage = lastPhoto.albumId;
			console.log(curPage);
			getPhotos(curPage);
			setPrevY(curPage);
		}
		setPrevY(y);
	};

	const getPhotos = (page) => {
		setLoading(true);
		axios
			.get(
				`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
			)
			.then((res) => {
				setPhotos([...photos, ...res.data]);
				setLoading(false);
			});
	};

	// Additional css
	const loadingCSS = {
		height: '100px',
		margin: '30px',
	};

	// To change the loading icon behavior
	const loadingTextCSS = { display: loading ? 'block' : 'none' };

	return (
		<div className="container">
			<div style={{ minHeight: '800px' }}>
				{photos.map((user) => (
					<img src={user.url} height="100px" width="200px" alt="" />
				))}
			</div>
			<div ref={loadingRef} style={loadingCSS}>
				<span style={loadingTextCSS}>Loading...</span>
			</div>
		</div>
	);
};

export default ScrollComponent;
