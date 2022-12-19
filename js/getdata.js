let movie = [];
let errorMessage = '';
let loading = false;
let baseUrl = 'http://api.themoviedb.org/3/movie/popular?api_key=8ca7086260d6440956c15917b02b2ef1&language=en-US';
let baseUrlForSearch = `https://api.themoviedb.org/3/search/movie?api_key=8ca7086260d6440956c15917b02b2ef1&query=`;
const getMovies = async () => {
    try {
        const res = await fetch(baseUrl)
        if (!res.ok) {
            errorMessage = `${res.status} : ${res.statusText}`;
            throw new Error(errorMessage);
        } else if (res.ok && res.status === 200) {
            const json = await res.json();
            let container = document.querySelector('#articleContainer');
            let strArticles = "";
            movie = json && json['results'];
            console.log(json, `json`)
            movie.forEach((item, id) => {
                strArticles +=
                    '<div class="item col-md-3" id="item ' + id + ' "  tabindex="0">' +
                    '<div class=" h-100 text-center">' +
                    '<img style="width: 302px; height: 453px" class="card-img-top" src=" https://image.tmdb.org/t/p/w220_and_h330_face/' + item.backdrop_path + '" height="100%" width="100%">' +
                    '<div class="card-body">' +
                    '<strong class="card-title">' + item.title + ' </strong>' +
                    '<strong class="card-text">' + item.original_language + '</strong>' +
                    '</div>' +
                    '<div class="card-footer">' +
                    '<a href="film/442/xx" class=" btn btn-primary d-block">VIEW FILM</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            })
            container.innerHTML = strArticles;
            return json;
        }

    } catch (err) {
        console.log(err, `error`);
        errorMessage = err;
        console.log(errorMessage, `errorMessage`)
    }
}

getMovies();


