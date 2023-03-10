const axios = require('axios').default;
const BASIC_URL = "https://pixabay.com/api/";
const API_KEY = "33266337-e4c6780c1f261ccee8f95a294";


export default class ImagesApi {
    constructor() {
        this.queryPage = 1;
        this.searchQuery = "";
        this.imagesPerPage = 40;
        this.totalHits = null;
    }

    async getImages() {
        let that = this;
        const response = await axios.get(`${BASIC_URL}?key=${API_KEY}&q=${that.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.imagesPerPage}&page=${that.queryPage}`);
        that.totalHits = response.data.totalHits;
        return response.data.hits;
    };

    resetPage() {
        this.queryPage = 1;
    }

    incrementPage() {
        this.queryPage += 1;
    }
};