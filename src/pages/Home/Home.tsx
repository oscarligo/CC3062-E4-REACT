import MovieCard from '../../components/Movies/MovieCard/MovieCard';
import {type Movie} from '../../types/movie';


// Movie example
const movies: Movie[] = [
    {
        id: 1,
        title: "Example Movie",
        overview: "This is an example movie used for testing the MovieCard component.",
        poster_path: "/example-poster.jpg",
        backdrop_path: "/example-backdrop.jpg",
        release_date: "2024-01-01",
        vote_average: 7.5,
        genre_ids: [28, 12],
        adult: false,
        original_language: "en"
    }   
    
];

export default function Home(){

return (    
    <div>
        <h1>Home</h1>
        <MovieCard movie={movies[0]} />
    </div>
);


}