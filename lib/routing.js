const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "Users/make_/Desktop/cy/pages/page-not-found/page-not-found.html.html",
    "/": "Users/make_/Desktop/cy/pages/homepage/homepage.html",
    "/movies": "Users/make_/Desktop/cy/pages/movies/movies.html",
    "/single-movies": "Users/make_/Desktop/cy/pages/single-movies/single-movies.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
