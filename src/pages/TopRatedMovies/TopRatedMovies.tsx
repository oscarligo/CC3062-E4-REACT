import MovieCard from '../../components/Movies/MovieCard/MovieCard';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import './TopRatedMovies.css';



export default function TopRatedMovies(){
    const { data: movies, loading, error } = useFetchMovies('/movie/top_rated');

    if (loading) return <p>Cargando películas...</p>;
    if (error) return <p>Hubo un error: {error}</p>;

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
