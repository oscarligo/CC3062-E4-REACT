import MovieCard from '../../components/Movies/MovieCard/MovieCard';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import './Home.css';



export default function Home(){
    const { data: movies, loading, error } = useFetchMovies('/movie/popular');

    if (loading) return <LoadingSpinner message="Cargando estrenos..." />;
    if (error) return <ErrorMessage error={error} />;

return (
    <>
        <h1>Pelicula Populares</h1>
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </>
    
    );
};
