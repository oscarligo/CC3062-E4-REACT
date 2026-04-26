export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    adult: boolean;
    original_language: string;
}

export interface TMDBResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface MovieDetail extends Omit<Movie, 'genre_ids'> {
    genres: { id: number; name: string }[];
    budget: number;
    revenue: number;
    runtime: number | null;
    tagline: string | null;
    status: string;
    homepage: string | null;
    }