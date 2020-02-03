import http from './httpService';

export function getGenres() {
    return http.get("http://localhost:3900/api/genres");

    // return http.get("http://localhost:3900/api/genres", {
    //     headers: {
    //         'X-Requested-With': 'XMLHttpRequest'
    //     }
    // });
}