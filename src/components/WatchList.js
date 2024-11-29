import React from "react";
import MovieCard from "./MovieCard";
import '../styles.css';

export default function WatchList({movies,watchlist,toggleWatchList}){
    return(
        <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchList={toggleWatchList}
              isWatchlisted={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
    )
}