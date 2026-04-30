import { Link } from 'react-router';
import { type Movie } from '../../../types/movie';
import './MovieCard.css';

interface MovieCardProps {
    movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
    const imageUrl = movie.poster_path  // peticion de la imagen
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/placeholder.png'; // imagen por defecto

    return (
        <Link to={`/movie/${movie.id}`} className="movieCard">
            <div className="imageContainer">
                <img 
                src={imageUrl} 
                alt={movie.title} 
                className="poster"
                loading="lazy" 
                />
                <div className="rating">
                {movie.vote_average.toFixed(1)}
                </div>
            </div>
            <div className="info">
                <h3 className="title">{movie.title}</h3>
                <p className="date">{new Date(movie.release_date).getFullYear()}</p>
            </div>
        </Link>
    );
}