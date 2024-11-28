import React,{useState,useEffect} from "react";
import MovieCard from "./MovieCard";
export default function MovieGrid(){
    const[movies,setMovies]=useState([]);
    const [searchTerm, setSearchTerm] = new useState([]);

    const[rating,setRating]=useState("All")
    const[genre,setGenre]=useState("All Genres")
    useEffect(()=>{
        fetch("movies.json")
        .then(response=>response.json())
        .then(data=>setMovies(data))
        // setMovies();
    })
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };
    const matchesGenre = (movie,genre)=>{
        return genre==="All Genres" || movie.genre.toLowerCase() ===genre.toString().toLowerCase();
    }
    const matchesSearchTerm = (movie,searchTerm)=>{
        return movie.title.toLowerCase().includes(searchTerm.toString().toLowerCase());
    }
    const matchesRating = (movie, rating)=>{
        switch(rating){
            case 'All':
                return true;
            case 'Good':
                return movie.rating>=8;
            case 'Ok':
                return movie.rating>=5 && movie.rating<8;
            case "Bad":
                return movie.rating<5;
            default:
                return false;
        }
    }
    const filteredmovies= movies.filter((movie)=>
        matchesGenre(movie,genre) &&
        matchesRating(movie,rating) &&
        matchesSearchTerm(movie,searchTerm)
    );

    
    return(
        <div>
        <input 
        type="text"
        placeholder="Enter Title"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
        />
        <div className="filter-bar">
            <div className="filter-slot">
                <label>Genre</label>
                <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
                    <option>All Genres</option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Fantasy</option>
                    <option>Drama</option>
                </select>
            </div>

            <div className="filter-slot">
                <label>Rating</label>
                <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
                    <option>All</option>
                    <option>Good</option>
                    <option>Ok</option>
                    <option>Bad</option>
                </select>
            </div>
        </div>

        <div className="movies-grid">
            {
                filteredmovies.map(movie=>(
                    <MovieCard movie={movie} key={movie.id}/>
                ))
            }
        </div>
        </div>
    )   
}