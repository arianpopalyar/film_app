import Hero from "./Hero";
import { Link } from "react-router-dom";

const FilmCard = ({movie}) => {
    const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`:`https://via.placeholder.com/400`;
    const mediaType = movie.media_type ==="tv" ? "tv":"movie";
    const detailUrl = `/${mediaType}/${movie.id}`;
    const contentTitle = movie.name ? movie.name : movie.original_title;
    
 return (
    <div className="col-lg-3 col-md-3 col-2">
        <div className="card">
            <img src={posterUrl} className="card-img-top" alt={contentTitle}/>
            <div className="card-body">
                <h6>{movie.media_type}</h6>
                <h5 className="card-title">{contentTitle}</h5>
                <Link to={detailUrl} className="btn btn-detail">More details</Link>
            </div>
        </div>
    </div>
 )
}

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, i) => {

        return (
            <FilmCard movie={obj} key={i} />
        )
    })

    return (
        <>
            <Hero text={title}/>
            {
            resultsHtml.length > 0 ? (  
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
            </div>) :(
                <div className="container">
                    <h1>No movie found</h1>
                </div>
            )
            }
        </> 
    );
}

export default SearchView;