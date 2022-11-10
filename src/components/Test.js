import React ,{useEffect} from "react";
import {useSelector , useDispatch} from 'react-redux';

const Test =() =>{
    const dispatch = useDispatch();
    const films = useSelector(state => state.films)

    useEffect(async () => {

        const res = await fetch('https://swapi.dev/api/films');
        const data = await res.json();
        dispatch({ type: 'getFilms', payload: data.results })
        // console.log({data})
      })
    


    return (
        <div>
        <h2>Films</h2>
        <div>{films.length > 0 && films.map((film) =><p>{film.title}</p>)}</div>

        <button>logout</button>
        </div>
    );
}
export default Test;