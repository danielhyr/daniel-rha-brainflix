
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { API_KEY, API_URL } from '../../utils/api'

import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo/Logo-brainflix.svg"

import './Home.scss'

function Home() {

    const [videos, setVideos] = useState(null)


    // useEffect(() => {
    //     // Update the document title using the browser API
    //     axios.get(`${API_URL}videos/?api_key=${API_KEY}`).then(response => {
    //         setVideos(response.data)
    //       }).catch(err => console.log(err))
    //   });

    return (


        <main className="main">

            <div className="main-1">
                <h1>Welcome to <img className="main__logo" src={Logo} alt="brainflix logo"></img></h1>
                <h2 className="main-1__h2">Content at the tip of your fingers</h2>
                <Link to={`/videos`} className="main-1__link">Take me to the videos </Link>
            </div>

            <div className="main-vid-1">
                <img></img>
            </div>
            <div className="main-color-1">

            </div>
            <div className="main-color-2">

            </div>
            <div className="main-vid-4">
                <img></img>

            </div>
            <div className="main-vid-5">
                <img></img>

            </div>
            <div className="main-color-3">

            </div>
            <div className="main-color-4">

            </div>
            <div className="main-vid-8">
                <img></img>

            </div>
        </main>
    )
}

export default Home