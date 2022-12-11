import React, { useEffect, useState } from 'react';
import { FaImdb, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import API from '../api/API';
import AddOrRemoveBtn from '../components/AddOrRemoveBtn';

const api_key = process.env.REACT_APP_API_KEY;
const MovieDetails = ({ onButtonClick }) => {
   const [movie, setMovie] = useState(null);
   const [trailerKey, setTrailerKey] = useState(null);
   const [showMore, setShowMore] = useState(false);
   const params = useParams();
   useEffect(() => {
      const FetchData = async () => {
         // try {
         // @ts-ignore
         const movieId = Number(params.id);
         // @ts-ignore
         const type = params.type;
         const { data } = await API.get(`3/${type}/${movieId}?api_key=${api_key}&language=en-US`);
         const trailer = await API.get(
            `3/${type}/${movieId}/videos?api_key=${api_key}&language=en-US`,
         );
         setTrailerKey(trailer.data.results[0]?.key);
         setMovie({
            id: data.id,
            title: data.title || data.name,
            poster: data.poster_path,
            bgPoster: data.backdrop_path || null,
            logoPath:
               data.production_companies.length > 0 ? data.production_companies[0].logo_path : null,
            releaseDate: data.release_date || data.first_air_date,
            genre: data.genres.map((el) => el.name).join(' | '),
            summary: data.overview,
            type: type,
            rate: data.vote_average,
            imdb: data.imdb_id ? `https://www.imdb.com/title/${data.imdb_id}` : data.homepage,
         });
      };
      FetchData();
   }, []);

   const onPosterClick = (movieID) => {
      console.log(movieID);
   };
   const showMoreWords = () => {
      if (movie.summary.length > 196) {
         return (
            <>
               {showMore
                  ? movie.summary + ' '
                  : `${movie.summary?.slice(0, window?.innerWidth < 520 ? 90 : 196)}... `}
               <button className="btn-link" onClick={() => setShowMore(!showMore)}>
                  {showMore ? 'Show less' : 'Show more'}
               </button>
            </>
         );
      }
      return movie.summary;
   };
   if (movie) {
      return (
         <div className="movie-details-container">
            <div
               className="bg-filter"
               style={{
                  backgroundImage:
                     (movie.bgPoster &&
                        `url(https://image.tmdb.org/t/p/original${movie.bgPoster})`) ||
                     `red`,
               }}></div>
            <div className="movie-details-content flex-center">
               <h1 className="movie-title textbox">{movie.title}</h1>

               <div style={{ margin: '5px 0' }}>{movie.genre}</div>
               {movie.releaseDate.slice(0, 4)}
               <div
                  style={{
                     alignSelf: 'center',
                     marginTop: '10px',
                     maxWidth: '330px',
                     flexWrap: 'wrap',
                  }}>
                  {showMoreWords()}
                  {/* <details>
                     <summary className="more-info">Show More...</summary>
                     <p style={{ marginTop: '10px' }}>{movie.summary.slice(0, 185)}</p>
                  </details> */}
               </div>

               <div className="flex-start">
                  <a
                     href={movie.imdb}
                     target="_blank"
                     rel="noreferrer"
                     style={{ marginRight: '15px' }}>
                     {<FaImdb className="plusIcon"></FaImdb>}
                  </a>
                  {movie.rate}
                  {<FaStar className="plusIcon star"></FaStar>}
               </div>

               {movie.logoPath && (
                  <img
                     src={`https://image.tmdb.org/t/p/original${movie.logoPath}`}
                     alt=""
                     width="100"
                     className="margin-top"
                  />
               )}
               <div style={{ marginTop: '25px', marginBottom: '20px' }}>
                  <AddOrRemoveBtn
                     id={movie.id}
                     title={movie.title}
                     poster={`https://image.tmdb.org/t/p/original${movie.poster}`}
                     type={movie.type}
                     onButtonClick={onButtonClick || onPosterClick}
                  />
               </div>
            </div>
            <div className="movie-trailer">
               <iframe
                  width={window?.innerWidth < 520 ? window.innerWidth - 33 : 1131}
                  height={
                     window?.innerWidth < 520 ? window.innerWidth - 33 : window.innerHeight - '100'
                  }
                  //   width="1131"
                  //   height="636"
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
               />
            </div>
         </div>
      );
   }
   return null;
};

export default MovieDetails;
