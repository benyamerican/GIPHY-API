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
var topics =['Biology','Physics','Math'];
//var q = ["A","B"];
////////////////////Taking action on buttons//////////////////
  function actionOntopic() {
    //Function with AJAX call to GIPHY; 
//Q parameterc for API link set to search term, limit 10 results
  //Create div with respective still and animate image sources 
  //with "data-state", "data-still" and "data-animate" attributes
 var topic = $(this).attr("data-name"); 
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic +"&api_key=31O9EZj1P994Acp44GRThKC2LaO0aKyD&limit=10"
//console.log(queryURL);
///////////////////// AJAX///////////////////////////
$.ajax({
url :queryURL,
method : "GET",
}).done(function(response){
    buttonCreator();
     ///////for loop through the data array///////
     for(var i = 0;i < response.data.length;i++){
     var dataStill = response.data[i].images.original_still.url;
     var dataAnimate = response.data[i].images.original.url;
     var rating = (response.data[i].rating);
///////////creating image frame /////////////
     var topicsImage = $("<img class='image'><hr>");
     var imageRatingH = $('<h3>').prepend('Rating : ' + response.data[i].rating);

/////////////////////////////state Moving/Still/////
/////////////////////////////////////////////////////
    // var  stateAnimate = topicsImage.attr("src", relatedGifAnimate);
     var normalState = topicsImage.attr("src" , dataStill);
     ///////////////////////////////////////////////////
     var stateAnimate = topicsImage.attr("data-animate",dataAnimate);
     var stateStill = topicsImage.attr("data-still" , dataStill);
     ////////////////

     stateStill.attr("data-state", 'still');
///////////////////////////////////////////////////////
   
   // 

///////////////////////////////////////////////////////
     $('#imageContainer').prepend(normalState);
     //////////////rating//////////////////////
     $('#imageContainer').prepend(imageRatingH);
     };
     /////////////////Moving/still//////////////
     ///////////////////////click on the image
$('.image').on("click" ,function() {
    
    
    var state = $(this).attr("data-state");
    
    if(state==="still"){
        $(this).attr("data-state",'animate');
        $(this).attr("src", $(this).attr("data-animate"));
    
    }else{
        $(this).attr("data-state",'still');
        $(this).attr("src", $(this).attr('data-still'));

    }
  });
});
/////////////////END OF AJAX///////////////////////////
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
         newButtonElement.attr("data-name", topics[i]);
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
        }else{
            console.log('In case no one told you today.You are an idiot! ')
        };
       $("#form-value").val('')
      });
//Just calling the function so we'll have the 
//array button present when the page opens
    buttonCreator();
    // //////////////////////////////////////////////////////
$(document).on("click", ".topiClass", actionOntopic).empty();
///////////////////////////////////////////////////

////THE END/////
});