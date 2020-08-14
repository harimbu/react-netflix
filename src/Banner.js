import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
        }
        fetchData();
    }, []);

    console.log(movie);

    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundPosition: 'center center'
            }}>
            <div className='banner__fade'></div>
            <div className='banner__content'>
                <h1>{movie.name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                {/* <div className='banner_text'>{ movie.overview}</div> */}
                <div className='banner_text'>
                    {movie.overview && movie.overview.substr(0, 140) + '...'}
                </div>
            </div>
        </header>
    );
};

export default Banner;
