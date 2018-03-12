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

// ////////////////////VARIABLES////////////////////////////////
var topics =[];
//var q = "";

//var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + q +"&api_key=31O9EZj1P994Acp44GRThKC2LaO0aKyD&limit=10&rating=g"

///////////////////// AJAX///////////////////////////
//$.ajax({
//url :queryURL,
//method : "GET",

//}).done(function(giphy){
  
//});
/////////////////END OF AJAX///////////////////////////




///////////////////////////////////////////////////
//////////CLICK SEARCH FUNCTION CREATE BUTTON//////////
$("#search_button").click(function search(){
////////////////TAKE TEXT INPUT AND CREATE A BUTTON////////////////////
    let q = $("#form-value").val().trim();
//IF/ELSE STATEMENT IN CASE USER DIDN'T TYPE ANYTHING BUT WAS SO STUPID TO HIT ENTER/////
    if (q){
    $("#divForNewButtons").append("<button>" + q + "</button>");
    $("button").addClass("buttonsClass");
    }
    else
    {console.log("You didn't search shit what do you expect?")};
 /////////EMPTY THE TEXT AFTER HITTING ENTER//////////
   q = $("#form-value").val("");
////////////PREVENT DEFAULT DUHHH!//////////////////
    event.preventDefault();
})

//////////////END CLICK SEARCH FUNCTION CREATE BUTTON//////
});;