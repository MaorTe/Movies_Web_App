import React, { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import ToggleButton from './ToggleButton';

const Search = () => {
   const [term, setTerm] = useState('');
   const [type, setType] = useState('movie');
   const [selected, setSelected] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      const search = async () => {
         navigate({
            pathname: `searchresults/${type}`,
            search: `?${createSearchParams({
               q: term,
            })}`,
            replace: true,
         });
         //  navigate(`/searchresults/${type}?q=${term}`, { replace: true });
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
   }, [term, selected]);

   const handleSearchQuery = (e) => {
      setTerm(e.target.value);
   };

   return (
      <div className="flex-center">
         <ToggleButton
            selected={selected}
            toggleSelected={() => {
               setSelected(!selected);
               selected ? setType('tv') : setType('movie');
            }}
         />
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
            <input type="submit" className="search-submit button" value="&#xf002;" disabled />
         </form>
      </div>
   );
};

export default Search;
