import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (loading) return (
  <div>
    <p>Loading movie...</p>
  </div>);
  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
       <div>
        <div>
          <NavBar />
        </div>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </div>
    </div>
   
  );
};

export default Movie;