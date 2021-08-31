import React, { Component } from 'react'
import axios from "axios";
import MyMoviesContainer from '../Components/MyMoviesContainer';


export class MyMoviesPage extends Component {

    state = {
        myMovies: []
    }

    componentDidMount = () => {

        axios.get('http://localhost:8080/movies')
            .then(resp => this.setState({ myMovies: resp.data }));
    }




    removeMovie = (movie) => {
        let movieObj = movie;
        let newMoviesArr = this.state.myMovies.filter(movie => movie != movieObj)

        axios.delete(`http://localhost:8080/movies/${movie.id}`)
            .then(res => console.log(res))
            .then(this.setState({ myMovies: newMoviesArr }))
    }


    render() {
        return (
            <div>
                <h1>My Movie Collection:</h1>
                <MyMoviesContainer removeMovie={this.removeMovie} myMovies={this.state.myMovies} />
            </div>
        )
    }
}

export default MyMoviesPage
