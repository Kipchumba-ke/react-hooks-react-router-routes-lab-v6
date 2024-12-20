import { Link } from "react-router-dom";

function MovieCard({ id, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
