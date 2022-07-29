import Hero from "./Hero";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MoviewView = () => {
    const {id} = useParams();

    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const mediaType = location.pathname.includes('tv')?"tv":"movie";
    
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data)
            setIsLoading(false)
        })
    }, [id]);

    const renderMovieDetails =() =>{
        if(isLoading){
            return <Hero text="Loading..."/>
        }
        if(movieDetails){
            const posterPath = movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : "https://via.placeholder.com/400";
            const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
            const contentTitle = movieDetails.name ? movieDetails.name : movieDetails.original_title;

            return (            
            <>
            <Hero text={contentTitle} backdrop={backdropUrl}/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                    </div>
                    <div className="col-md-9">
                        <h2>{movieDetails.original_title}</h2>
                        <p className="lead">
                            {movieDetails.overview}
                        </p>
                        <h5>Movie Status:   {movieDetails.status}</h5>
                        <h5>Run time:   {movieDetails.runtime}</h5>
                        <h5>Release date:   {movieDetails.release_date}</h5>
                    </div>
                </div>
            </div>
            </>)   
        }
    }
    return renderMovieDetails();
}

export default MoviewView;