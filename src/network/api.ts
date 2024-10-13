import query from './query';

export const getMoviesBySearch = async (searchTerm, page) => {
    return query.get(`/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=${page}`).then((response) => {
        return response.data;
    }).catch((error) => {
        throw error;
    });
};

export const getTrendingMovies = async () => {
    return query.get(`/3/trending/movie/day`).then((response) => {
        return response.data;
    }).catch((error) => {
        throw error;
    });
};

export const getRecentMovies = async (page) => {
    query.get(`/3/movie/now_playing?page=${page}`).then((response) => {
        return response.data;
    }).catch((error) => {
        throw error;
    });
};

