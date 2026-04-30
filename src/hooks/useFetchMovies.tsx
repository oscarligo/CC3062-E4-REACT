import { useState, useEffect } from 'react';
import { type TMDBResponse,type Movie } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export function useFetchMovies(endpoint: string) {
    const [data, setData] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log(API_KEY)
        const fetchData = async () => {
        try {
            setLoading(true);
            
            const response = await fetch(
            `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES`
            );

            if (!response.ok) {
            throw new Error('Error while fetching movies');
            }

            const result: TMDBResponse = await response.json();
            setData(result.results);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [endpoint]); 

    return { data, loading, error };
}