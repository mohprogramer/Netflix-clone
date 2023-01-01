import React, { useState, useEffect } from 'react';
import requests from './requests';
import axios from './axios'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            console.log("mohammad")
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData();
    }, [])


    return (
        <header 
        className='banner'
        style={{
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundSize:'cover',
            backgroundPosition:"center center"
        }}
        >
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{movie?.overview}</h1>
            
        </header>
    );
};

export default Banner;