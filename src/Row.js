import React, { useEffect, useState } from 'react';
import axios from './axios'
import './Row.css';

const BASE_URL= 'https://image.tmdb.org/t/p/original/';

const Row = ({title , fetchURL, isLargeRow}) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchURL])

    console.log(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${BASE_URL}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    );
};

export default Row;