export type Movie = {
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    adult: boolean;
    rank?: number;
}

export type TrendingCardProps = {
    movie: Movie;
    index: number;
    key: string;
}