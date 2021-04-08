import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
	const [term, setTerm] = useState('');
	const { push } = useHistory();

	useEffect(() => {
		const search = async () => {
			push(`/SearchResults/q=${term}`);
		};

		//on init don't run search
		// if (term) {
		// 	search();
		// } else {
		//after every 1sec run the search
		const timeoutId = setTimeout(() => {
			if (term) {
				search();
			}
		}, 1000);
		//if the user wrote another string within 1 sec ,cancel last timeout and reset timer
		return () => {
			clearTimeout(timeoutId);
		};
		// }
	}, [term]);

	const handleSearchQuery = (e) => {
		setTerm(e.target.value);
	};

	return (
		<div className="wrapper">
			<div className="container">
				<form role="search" method="get" className="search-form form" action="">
					<label>
						<span className="screen-reader-text">Search for...</span>

						<input
							type="search"
							className="search-field"
							placeholder="Type something..."
							value={term}
							onChange={(e) => handleSearchQuery(e)}
							// name="s"
						/>
					</label>
					<input
						type="submit"
						className="search-submit button"
						value="&#xf002;"
						disabled
					/>
				</form>
			</div>
		</div>
	);
};

export default Search;
