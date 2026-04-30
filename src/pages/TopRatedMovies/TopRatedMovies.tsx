import MovieCard from '../../components/Movies/MovieCard/MovieCard';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import './TopRatedMovies.css';



export default function TopRatedMovies(){
    const { data: movies, loading, error } = useFetchMovies('/movie/top_rated');

    if (loading) return <LoadingSpinner message="Cargando películas..." />;
    if (error) return <ErrorMessage error={error} />;

return (
    <>
        <h1>Peliculas Mejor Calificadas</h1>
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </>

    );
};
