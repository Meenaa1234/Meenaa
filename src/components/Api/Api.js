import React , {useEffect,useCallback, useState }from "react";
import {Link , useHistory} from 'react-router-dom'
import MoviesList from './MoviesList';

function Api() {
  

   const [movies , setMovies] = useState([]);
   const [isLoading , setIsLoading] = useState(false);
   const [error , setError] = useState(null);

  const history = useHistory();
  
  const  fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try{

      const res = await fetch('https://swapi.dev/api/films/')
      const data = await res.json();
    
  
    const transformedMovies = data.results.map(movieData =>{
      return {
        id: movieData.id,
        title:movieData.title,
        openingText:movieData.opening_crawl,
        releaseDate:movieData.release_date
      }
    })
    setMovies(transformedMovies);
    } catch(error){
     setError(error)
     setIsLoading(false);
    }

    setIsLoading(false);
  

  } , []);
  
  useEffect(() => {
    fetchMoviesHandler();
   } , [fetchMoviesHandler]);



  return (
    <>
    
      {/* <h2>hello</h2> */}
      <button onClick={fetchMoviesHandler} className="fm">Fetch Movies</button>
      
      {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
      {!isLoading && movies.length === 0 && <p>No Movies found</p>}
      {isLoading && <p>Loading....</p>}
      {!error  && <p>{error}</p>}
       <div>
      <button className="lb" type="submit" onClick={()=> history.push('/Home')}>LogOut</button>
      </div>
      {/* <div><Link to='/Home'><button className="lb">LogOut</button></Link></div> */}

    </>
  );
}

export default Api;
