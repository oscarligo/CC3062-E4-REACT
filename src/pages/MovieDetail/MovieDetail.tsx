import { useParams } from 'react-router';
import { useFetchMovieDetail } from '../../hooks/useFetchMovieDetail';
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import './MovieDetail.css';

export default function MovieDetail() {
    const { id } = useParams();
    const { movie, loading } = useFetchMovieDetail(id);

    if (loading) return <LoadingSpinner message="Cargando detalles..." />;
    if (!movie) return <ErrorMessage error="Película no encontrada." />;

    const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const trailerUrl = import .meta.env.VITE_MOVIE_TRAILER_BASE_URL + movie.id;

    return (
            <div className="detailPage">
                <div 
                    className="hero" 
                    style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), var(--background)), url(${backdropUrl})` }}
                >
                    <div className="heroContent">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} 
                        className="detailPoster"
                    />
                    <div className="mainInfo">
                        <h1>{movie.title}</h1>
                        <p className="tagline">{movie.tagline}</p>
                        <div className="stats">
                        <span>{movie.release_date}</span> • 
                        <span>{movie.runtime} min</span> • 
                        <span className="rating"> {movie.vote_average.toFixed(1)}</span>
                        </div>
                        <div className="genres">
                        {movie.genres.map(g => <span key={g.id} className="genreBadge">{g.name}</span>)}
                        </div>
                    </div>
                    </div>
                </div>

                <div className="detailBody">
                    <section className="overview">
                    <h2>Sinopsis</h2>
                    <p>{movie.overview}</p>
                    </section>
                </div>

                
                {trailerUrl && (
                        <div className="trailerContainer">
                            <h2>Tráiler Oficial</h2>
                            <div className="videoWrapper">
                            <iframe 
                                src={trailerUrl} 
                                title="Movie Trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                            </div>
                        </div>
                )}
                    
                    
                
            </div>          
    );
}