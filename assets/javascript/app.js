$(document).ready(function(){
// Instructions
// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
// We chose animals for our theme, but you can make a list to your own liking.
// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
// Under every gif, display its rating (PG, G, so on).
// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
// Deploy your assignment to Github Pages.
// Rejoice! You just made something really cool.

// ////////////////////ARRAY OF TOPICS////////////////////////////////
var topics =['biology','physics'];
//var q = ["A","B"];
////////////////////Taking action on buttons//////////////////
  function actionOntopic() {
    var topicId = $(this).attr("id");
   console.log(topicId);
  };
 
  function buttonCreator(){
    //  event.preventDefault();
    $("#buttonsContainer").empty();

    //////////loping through the topics array//////
    for(var i = 0; i < topics.length;i++){
        ///////////taking the input and creating a button ////
        var newButtonElement = $("<button>");
        //adding a class to the new button which's just created////
        newButtonElement.addClass("topiClass");
         // Adding a data-attribute with a value of the gif at index i
         newButtonElement.attr("id", topics[i]);
          // Providing the button's text with a value of the movie at index i
          newButtonElement.text(topics[i]);
          // Adding the button to the HTML
          $("#buttonsContainer").append(newButtonElement);
    }
};

   
      //////////CLICK SEARCH FUNCTION CREATE BUTTON//////////
      $("#search_button").on("click", function(event) {
         event.preventDefault();
    //     

    //     // This line will grab the text from the input box
        let topic = $("#form-value").val().trim();
/////////if user actualy insert something take action//////
        if(topic){
         topics.push(topic);
         buttonCreator();
         /////Otherwise be a 3rd derivative of displacement(A JERK)
        ////and tell user how stupid he is///
        /////Just tell him in console-log so may hurts little less
        }else{console.log('In case no one told you today.You are an idiot! ')};
       $("#form-value").val('')
      });
//Just calling the function so we'll have the 
//array button present when the page opens


    buttonCreator();


    
//Function with AJAX call to GIPHY; 
//Q parameterc for API link set to search term, limit 10 results
  //Create div with respective still and animate image sources 
  //with "data-state", "data-still" and "data-animate" attributes

var q ="big+fish"; 
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + q +"&api_key=31O9EZj1P994Acp44GRThKC2LaO0aKyD&limit=10&rating=g"
//console.log(queryURL);
///////////////////// AJAX///////////////////////////
$.ajax({
url :queryURL,
method : "GET",
}).done(function(response){
    var results = response.data;
});
/////////////////END OF AJAX///////////////////////////


// adding a click event listener to all elements with the class "movie"
$(document).on("click", ".topiClass", actionOntopic);
///////////////////////////////////////////////////



});