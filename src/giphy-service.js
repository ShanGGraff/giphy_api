export default class GiphyService {
  static getSearch(search) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=1&offset=0&rating=g&lang=en`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", searchURL, true);
      request.send();
    });
  }
}
