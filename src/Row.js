import React, { useEffect, useState } from 'react';
import axios from './axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer';
import './Row.css';

const BASE_URL= 'https://image.tmdb.org/t/p/original/';

const Row = ({title , fetchURL, isLargeRow}) => {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchURL])

    const clickHandler = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name|| '')
            .then((url) => {
                
                console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            })
            .catch((error) => console.log(error))
        }
    }

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    console.log(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => clickHandler(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${BASE_URL}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}  />}
        </div>
    );
};

export default Row;