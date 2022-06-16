import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/API';
import MovieCard from '../components/MovieCard';
import MyLoader from '../components/MyLoader';
import ScrollArrow from '../components/ScrollArrow';

const SearchResults = () => {
   // tracking on which page we currently are
   const [page, setPage] = useState(null);
   // add loader reference
   const loader = useRef(null);

   const [results, setResults] = useState([]);
   const params = useParams();

   // @ts-ignore
   const query = params.query;
   // @ts-ignore
   const type = params.type;

   // useEffect for IntersectionObserver
   useEffect(() => {
      var options = {
         root: null,
         rootMargin: '300px',
         threshold: 1.0,
      };
      // initialize IntersectionObserver
      // and attaching to Load More div
      const observer = new IntersectionObserver(handleObserver, options);
      if (loader.current) {
         observer.observe(loader.current);
      }
   }, []);

   useEffect(() => {
      const search = async () => {
         const dataMovies = await API.get(
            `3/search/${type}?api_key=b99ccc44cb21876b1925f3944e20854b&language=en-US&query=${query}&page=${page}&include_adult=false`,
         );
         const movies = [...dataMovies.data.results].map((el) => {
            return {
               id: el.id,
               title: el.title || el.name,
               poster:
                  (el.poster_path && `https://image.tmdb.org/t/p/original${el.poster_path}`) ||
                  `https://ofilmdb.com/assets/img/cover.jpg`,
               type: type,
            };
         });
         setResults([...results, ...movies]);
      };
      search();
   }, [query, type, page]);

   const handleObserver = async (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
         setPage((page) => page + 1);
      }
   };

   const onPosterClick = (movieID) => {
      console.log(movieID);
   };
   return (
      <div className="grid-container">
         {results.length ? (
            results.map((movie) => (
               <MovieCard
                  key={movie.id + 1 + movie.id + 2}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.poster}
                  type={movie.type}
                  width={200}
                  height={300}
                  onButtonClick={onPosterClick}
               />
            ))
         ) : (
            <h1>No results</h1>
         )}
         <ScrollArrow></ScrollArrow>
         {window.innerWidth < 520 ? (
            <>
               <span ref={loader}>
                  <MyLoader />
               </span>
               <MyLoader />
            </>
         ) : (
            <>
               <MyLoader />
               <MyLoader />
               <span ref={loader}>
                  <MyLoader />
               </span>
               <MyLoader />
            </>
         )}
      </div>
   );
};

export default SearchResults;
