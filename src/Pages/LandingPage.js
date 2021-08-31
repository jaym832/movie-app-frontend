import axios from "axios";
import React, { useState } from 'react';
import MovieContainer from '../Components/MovieContainer'
import { FloatingLabel, Form, Button } from 'react-bootstrap';



function LandingPage() {



    const [movieTitle, setMovieTitle] = useState('')


    // const [movieData, setMovieData] = useState({
    //     title: '',
    //     year: '',
    //     poster: ''
    // })

    const [movieData, setMovieData] = useState({});

    const [isClicked, setIsClicked] = useState(false);

    //GETS MOVIE FROM API
    const getMovie = (movie) => {


        console.log(movie)

        const options = {
            method: 'GET',
            url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
            params: { s: movie, page: '1', r: 'json' },
            headers: {
                'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
                'x-rapidapi-key': '8757bf3de4mshfa1b1b6020f8780p15b4b3jsn7efd90a3baa0'
            }
        };

        axios.request(options).then(function (response) {

            console.log(response.data.Search)
            setMovieData(response.data.Search);
            response.data.Search[0] ? setIsClicked(true) : console.log('error');

        }).catch(function (error) {
            console.error(error);
        });


    }


    //SENDS DATA TO BACKEND
    const sendData = (movieInfo) => {

        console.log(movieInfo)

        const myMovieData = {
            title: movieInfo.Title,
            releaseDate: movieInfo.Year,
            poster: movieInfo.Poster

        }

        console.log(movieInfo)
        axios.post(`http://localhost:8080/movies/`, myMovieData)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })



    }



    // SETS THE STATE FOR MOVIE TITLE
    const submitMoive = (event) => {

        //GOOD FOR OBJECT DATA
        // setMovieData({ ...movieData, [event.target.name]: event.target.value });

        //SETS THE MOVIE TITLE
        setMovieTitle(event.target.value)

    }

    return (
        <div>
            <h1>Welcome to my Movie app!</h1>
            <h4>Please enter a movie title</h4>
            <FloatingLabel
                controlId="floatingInput"
                label="Movie Title"
                className="mb-3"
            >
                <Form.Control onChange={submitMoive} type="email" placeholder="name@example.com" name='title' />
            </FloatingLabel>


            <Button onClick={() => getMovie(movieTitle)} >
                Submit
            </Button>

            {isClicked ? <MovieContainer sendData={sendData} moviedata={movieData} /> : null}

        </div>
    )
}

export default LandingPage;


