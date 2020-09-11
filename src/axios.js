import axios from "axios";


/*base url for requests to movie database */
const instance =  axios.create({
    baseUR: "https://api.themoviedb.org/3",
});

export default instance;