import MovieCard from '../../components/Movies/MovieCard/MovieCard';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import './Home.css';



export default function Home(){
    const { data: movies, loading, error } = useFetchMovies('/movie/popular');

    if (loading) return <p>Cargando estrenos...</p>;
    if (error) return <p>Hubo un error: {error}</p>;

return (
    <div className="movie-grid">
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
    );
};
