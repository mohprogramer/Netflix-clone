import React, { useEffect, useState } from 'react';
import axios from './axios'

const BASE_URL= 'https://image.tmdb.org/t/p/original/';

const Row = ({title , fetchURL}) => {

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
        <div>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(movie => (
                    <img 
                    className='row_poster'
                    src={`${BASE_URL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    );
};

export default Row;