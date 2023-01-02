import React, { useState, useEffect } from 'react';
import requests from './requests';
import axios from './axios'
import './Banner.css'

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

    function ellipsify (str) {
        if (str.length > 10) {
            return (str.substring(0, 300) + "...");
        }
        else {
        return str;
    }
    }

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
            <div className='banner_content'>
                <h1  className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{ellipsify(String(movie?.overview))}</h1>
            </div>

            <div className='banner_fadeBottom'>
                
            </div>
            
        </header>
    );
};

export default Banner;