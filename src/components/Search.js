import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../api/API';
import SearchResults from '../pages/SearchResults.component';

const Search = () => {
	const [term, setTerm] = useState('');
	const { push } = useHistory();

	useEffect(() => {
		const search = async () => {
			push(`/SearchResults/${term}`);
		};

		//on init dont run search
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
		<div>
			<form className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={(e) => handleSearchQuery(e)}
						className="input"
					/>
				</div>
			</form>
		</div>
	);
};

export default Search;
