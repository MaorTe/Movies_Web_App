import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/API';
import Carousel from '../components/Carousel';

const Homepage = () => {
   const [moviesTop, setMoviesTop] = useState([]);
   const [seriesTop, setSeriesTop] = useState([]);
   // const [moviesByRating, setMoviesByRating] = useState([]);
   // const [seriesByRating, setSeriesByRating] = useState([]);
   const [width, setWidth] = React.useState(window.innerWidth);
   const updateWidth = () => setWidth(window.innerWidth);
   useEffect(() => {
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
   }, []);
   useEffect(() => {
      const FetchData = async () => {
         // try {
         const dataMovies = await API.get(
            '3/movie/top_rated?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&page=1',
         );
         const dataSeries = await API.get(
            '3/tv/top_rated?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&page=1',
         );
         // const { data } = await API.get(
         // 	'3/movie/top_rated?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&page=1'
         // );
         // const { data } = await API.get(
         // 	'3/movie/top_rated?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&page=1'
         // );

         setMoviesTop(
            [...dataMovies.data.results].map((el) => {
               return {
                  id: el.id,
                  title: el.title,
                  poster: `https://image.tmdb.org/t/p/original${el.poster_path}`,
                  type: 'movie',
               };
            }),
         );
         setSeriesTop(
            [...dataSeries.data.results].map((el) => {
               return {
                  id: el.id,
                  title: el.name,
                  poster: `https://image.tmdb.org/t/p/original${el.poster_path}`,
                  type: 'tv',
               };
            }),
         );

         // } catch (e) {
         // 	console.log(e.message);
         // }
      };
      FetchData();
   }, []);

   const onPosterClick = (movieID) => {
      //iterate over the database and find the correct id/title then move to the correct movie
      console.log(movieID);
      // const movieChose = data.find((movie) => movie.id === movieID);
   };

   return (
      <div className="homepage">
         <div className="flex">
            <h1>Movies-Top</h1>
            <Link className="category-link btn third" to={`/Categories/movie`}>
               view all
            </Link>
         </div>
         <div>
            <Carousel data={moviesTop} onPosterClick={onPosterClick} width={width}></Carousel>
         </div>

         <div className="flex">
            <h1>Series-Top</h1>
            <Link className="category-link btn third" to={`/Categories/tv`}>
               view all
            </Link>
         </div>
         <div>
            <Carousel data={seriesTop} onPosterClick={onPosterClick} width={width}></Carousel>
         </div>
      </div>
   );
};
export default Homepage;
