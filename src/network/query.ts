import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YThiOTM2NzVhYWY2OWM5NDQxNWMzMDU2OGYwYjFmNyIsIm5iZiI6MTcyODc1MDI0Ny4xMzkyMjMsInN1YiI6IjY3MGFhMTU4NDExMWJlNGYwMjc0NDgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J2D3uDNfPuf5XvzU14AJKEHS8RONfwrvJz-ArWJdvfo'
    }
});

export default axiosInstance;