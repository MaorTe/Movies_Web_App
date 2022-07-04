import { Link } from 'react-router-dom';
import AddOrRemoveBtn from './AddOrRemoveBtn';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './moviecard.css';

const MovieCard = ({
   title,
   poster,
   id,
   type,
   onButtonClick,
   width,
   height,
   homePageClassName,
}) => {
   const isCarouselMobile = () => {
      return window.innerWidth < 520 ? (
         <img src={poster} alt={poster} width={width} height={height} className="card__image" />
      ) : (
         <LazyLoadImage
            src={poster}
            alt={poster}
            width={width}
            height={height}
            className="card__image"
         />
      );
   };

   const cardOne = () => (
      <div className="movie-card-container">
         <Link to={`/MovieDetails/${type}/${id}`}>
            <LazyLoadImage
               src={poster} // use normal <img> attributes as props
               alt={''}
               width={width}
               height={height}
               className="img-select"
            />
         </Link>
         <h3>{title}</h3>
         {/* <div className="font-small centered">{title}</div> */}
         <AddOrRemoveBtn
            id={id}
            title={title}
            poster={poster}
            type={type}
            onButtonClick={onButtonClick}
         />
      </div>
   );

   const cardTwo = () => (
      <div className="container">
         <div className="card">
            <figure className="card__thumb">
               {isCarouselMobile()}
               <figcaption class="card__caption">
                  <h2 className="card__title">{title}</h2>
                  <p className="card__snippet"></p>
                  <Link className="card__button" to={`/MovieDetails/${type}/${id}`}>
                     To Movie
                  </Link>
                  <AddOrRemoveBtn
                     id={id}
                     title={title}
                     poster={poster}
                     type={type}
                     onButtonClick={onButtonClick}
                     homePageClassName={homePageClassName}
                  />
               </figcaption>
            </figure>
         </div>
      </div>
   );

   return !homePageClassName ? cardOne() : cardTwo();
};

export default MovieCard;
