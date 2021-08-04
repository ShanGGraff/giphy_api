export default class GiphyTrending {
  static getSearch() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&rating=g`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", trendingURL, true);
      request.send();
    });
  }
}