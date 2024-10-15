export type Movie = {
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    adult: boolean;
    rank?: number;
    id: number;
    overview: string;
}

export type TrendingCardProps = {
    movie: Movie;
    index: number;
    key: string;
}