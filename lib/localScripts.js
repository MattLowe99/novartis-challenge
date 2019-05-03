const apiKey = "LG8z9e5TVtoaLtYdlJ2em48KirczEkG2";
var page = 0;
function executeSearch(action) {

  // Calculate page of results to display
  if (action == "start") {
    page = 0
  }

  if (action == "prev" && page != 0) {
    page--;
  }

  if (action == "next" && page != 100) {
    page++;
  }

  //Update page number
  $("#currentPage").empty();
  document.getElementById("currentPage").innerHTML = page + 1;

  // Clear old content inside of div before new content is displayed
  $("#searchResult").empty();

  // Get search term inputted into text box by user
  var userInput = document.getElementById("searchQuery").value;
  var startDate = document.getElementById("startDate").value.replace(/-/g, "");
  var endDate = document.getElementById("endDate").value.replace(/-/g, "");

  // Put together API request URL with user query and API key
  var requestURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
  + userInput + "&begin_date=" + startDate + "&end_date=" + endDate +"&page=" + page + "&api-key=" + apiKey;

  // GET request to New York Times
  $.ajax({
    url: requestURL,
    type: "GET",
  }).done(function(articleData) {


    for (var i = 0; i < 10; i++) {

      // Assign information from each article to individual variables
      var headline = articleData.response.docs[i].headline.main;
      var url = articleData.response.docs[i].web_url;
      var snippet = articleData.response.docs[i].snippet;
      var date = articleData.response.docs[i].pub_date.substring(0,10);
      var type = articleData.response.docs[i].document_type;
      var image;


      // Check if article has thumbnail otherwise assign to no image
      if (articleData.response.docs[i].multimedia[0] != null) {
        image = "https://www.nytimes.com/" + articleData.response.docs[i].multimedia[0].url;
      }
      else {
        image = "";
      }

      // Display content from each article with cards
      $("#searchResult").append('<div class="card-body"> <h5 class="card-title text-primary"> <a href="'
      + url + '" title="Preview" data-toggle="popover" data-trigger="hover" data-content="'
      + snippet + '">' + headline + '</a></h5> <img class="img-thumbnail" alt="No Thumbnail Available" src='
      + image + '><div class="card-text">publicatation date: '
      + date + '</div> <div class="card-text">document type: '
      + type + '</div> </div>');

    }

    // Enable popovers in document
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover();
    });
  });
}
