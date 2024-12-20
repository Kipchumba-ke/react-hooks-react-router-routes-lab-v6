import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

const Home = ()=>{
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <a href={`/movie/${movie.id}`}>View Info</a>
        </div>
      ))}
      <NavBar/>
    </div>
  );
};

export default Home;