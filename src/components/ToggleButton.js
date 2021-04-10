import React from 'react';

function ToggleButton({ selected, toggleSelected }) {
	return (
		<div className="toggle-container" onClick={toggleSelected}>
			<div className={`dialog-button ${selected ? '' : 'disabled'}`}>
				{selected ? 'Series' : 'Movies'}
			</div>
		</div>
	);
}

export default ToggleButton;
