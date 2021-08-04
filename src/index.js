import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './giphy-service.js'
import GiphyRandom from './giphy-random.js'
import GiphyTrending from './giphy-trending.js'

function clearFields(){
  $('#search').val("");
  $('#imageToShow').attr("");
}

$('#gifSearch').click(function() {
  let search = $('#search').val();
  clearFields();
  let promise = GiphyService.getSearch(search);
  promise.then(function(response){
    const body = JSON.parse(response);
    let downSizedGif1 = body.data[0].images.downsized.url;
    $('#imageToShow').attr("src", downSizedGif1);
  });
});

$('#gifRandom').click(function() {
  //let search = $('#search').val();
  clearFields();
  let promise = GiphyRandom.getSearch();
  promise.then(function(response){
    const body = JSON.parse(response);
    let downSizedGif1 = body.data.images.downsized.url;
    $('#randomShow').attr("src", downSizedGif1);
  });
});

$('#gifTrending').click(function() {
  //let search = $('#search').val();
  clearFields();
  let promise = GiphyTrending.getSearch();
  promise.then(function(response){
    const body = JSON.parse(response);
    let downSizedGif1 = body.data[0].images.downsized.url;
    $('#trendingShow').attr("src", downSizedGif1);
  });
});
