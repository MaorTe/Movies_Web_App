import React from 'react';
import ContentLoader from 'react-content-loader';
let skeletonWidth = 0;
let skeletonHeight = 0;
const MyLoader = (props) => (
	<div className="flex-center movie-card-container">
		{console.log(window.innerWidth)}
		<ContentLoader
			speed={2}
			width={(skeletonWidth = window.innerWidth < 520 ? 150 : 340)}
			height={(skeletonHeight = window.innerWidth < 520 ? 150 : 295)}
			viewBox={`-80 0 340 295`}
			backgroundColor="#155ee5"
			foregroundColor="#3f189a"
			{...props}>
			<rect x="16" y="0" rx="13" ry="13" width="171" height="267" />
			<rect x="19" y="280" rx="0" ry="0" width="163" height="12" />
		</ContentLoader>
	</div>
);

export default MyLoader;
