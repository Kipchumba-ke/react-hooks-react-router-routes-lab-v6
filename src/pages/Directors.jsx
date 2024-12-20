import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Directors = () => {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((response) => response.json())
      .then((data) => {
        setDirectors(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching directors:", error));
  }, []);

  if (loading) return <p>Loading directors...</p>;

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;



