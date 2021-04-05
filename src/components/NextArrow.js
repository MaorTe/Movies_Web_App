import { ReactComponent as Arrow } from '../img/arrow.svg';
const NextArrow = ({ onClick, className }) => {
	const clickStop = (e, onClick) => {
		e.stopPropagation();
		if (onClick) {
			onClick(e);
		}
	};
	return (
		<button
			onClick={(e) => clickStop(e, onClick)}
			type="button"
			className={className}>
			<Arrow />
		</button>
	);
};
export default NextArrow;
