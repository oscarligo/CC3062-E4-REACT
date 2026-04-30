import { useParams } from 'react-router';
import { useFetchMovieDetail } from '../../hooks/useFetchMovieDetail';
import './MovieDetail.css';

export default function MovieDetail() {
    const { id } = useParams();
    const { movie, loading } = useFetchMovieDetail(id);

    if (loading) return <div className="loader">Cargando detalles...</div>;
    if (!movie) return <p>Película no encontrada.</p>;

    const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

    return (
            <div className="detailPage">
                {/* Fondo Hero */}
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

                {/* Sinopsis y Datos */}
                <div className="detailBody">
                    <section className="overview">
                    <h2>Sinopsis</h2>
                    <p>{movie.overview}</p>
                    </section>
                </div>

                <div className="VideoSection">
                    
                    
                    
                    
                </div>
            </div>          
    );
}