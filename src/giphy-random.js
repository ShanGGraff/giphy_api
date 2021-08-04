export default class GiphyRandom {
  static getSearch() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const randomURL = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", randomURL, true);
      request.send();
    });
  }
}