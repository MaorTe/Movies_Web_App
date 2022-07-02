import React, { useEffect, useState } from 'react';
import { FaImdb, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import API from '../api/API';
import AddOrRemoveBtn from '../components/AddOrRemoveBtn';

const MovieDetails = ({ onButtonClick }) => {
   const [movie, setMovie] = useState(null);
   const [trailerKey, setTrailerKey] = useState(null);
   const params = useParams();
   useEffect(() => {
      const FetchData = async () => {
         // try {
         // @ts-ignore
         const movieId = Number(params.id);
         // @ts-ignore
         const type = params.type;
         const { data } = await API.get(
            `3/${type}/${movieId}?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US`,
         );
         const trailer = await API.get(
            `3/${type}/${movieId}/videos?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US`,
         );

         setTrailerKey(trailer.data.results[0].key);
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

               <AddOrRemoveBtn
                  id={movie.id}
                  title={movie.title}
                  poster={`https://image.tmdb.org/t/p/original${movie.poster}`}
                  type={movie.type}
                  onButtonClick={onButtonClick || onPosterClick}
               />
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

               <div style={{ margin: '5px 0' }}>{movie.genre}</div>
               {movie.releaseDate.slice(0, 4)}
               {movie.logoPath && (
                  <img
                     src={`https://image.tmdb.org/t/p/original${movie.logoPath}`}
                     alt=""
                     width="200"
                     className="margin-top"
                  />
               )}
               <div style={{ alignSelf: 'flex-start' }}>
                  <details>
                     <summary className="more-info">Show More...</summary>
                     <p style={{ marginTop: '10px' }}>{movie.summary}</p>
                  </details>
               </div>
            </div>
            <div className="movie-trailer">
               <iframe
                  width={window?.innerWidth < 520 ? 360 : 1131}
                  height={window?.innerWidth < 520 ? 350 : 636}
                  //   width="1131"
                  //   height="636"
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="true"
               />
            </div>
         </div>
      );
   }
   return null;
};

export default MovieDetails;
