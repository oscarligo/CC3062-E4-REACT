import { useState, useEffect } from 'react';
import { type MovieDetail } from '../types/movie';

export function useFetchMovieDetail(id: string | undefined) {
    const [movie, setMovie] = useState<MovieDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        
        const fetchDetail = async () => {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_TMDB_BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=es-ES`
            );
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        };

        fetchDetail();
    }, [id]);

    return { movie, loading };
}