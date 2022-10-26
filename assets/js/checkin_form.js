//definitions of input fields
var formElement = $('#checkin-form');
var breweryElement = $('input[name="brewery_name"]');
var dateOfCheckinElement = $('input[name="date"]');
const btn = document.querySelector('#submit');
const form = document.querySelector('#checkin-form');
var select = document.getElementById("selectRating");
var options = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];


function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('Brewery:', breweryElement.val());
  console.log('Date of Checkin:', dateOfCheckinElement.val());
  //more input fields to come

  //store populated inputs in an array
  var populatedFields = [breweryElement.val(), dateOfCheckinElement.val()];
  console.log('User Input: ', populatedFields.join(', '));
  //ToDo: Logic to send input data to server

  // Clear all input fields
  $('input[type="text"]').val('');
  console.log('Form Submitted');
}

function handleFormCancel(event) {

  //ToDo: decide on behavior of cancelling
  //ToDo: handle Cancel Logic

  // Clear all input fields
  $('input[type="text"]').val('');

  console.log('Form Canceled');
}


//This function will leverage API to add search funtionality to the Brewery input field
//As the user is typing a Brewery, they will observe a suggesgtion dropdown in the input field
function searchBreweryLocationInput(){}


//This fucntion will add a drown-down menu that has four options for ratings: 1 star, 2 stars, 3 stars, 4 stars, 5 stars
function addBreweryRatingtoInput(){
  
  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }

}

addBreweryRatingtoInput()

// we will use this method to later post the FormData object to the server
btn.addEventListener('click', (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // create a form data object
  const formData = new FormData(form);
  const values = [...formData.entries()];
  console.log(values);
});

//This function will leverage an API to assist the user selecting a rating for the beer they tried
//This field will contain a drown-down menu that has four options for ratings: 1 star, 2 stars, 3 stars, 4 stars
function addBeerRatingtoInput(){}

// Submit event on the form
//formElement.on('submit', handleFormSubmit);


// ToDo: Add code to send input data to server

//Beer Mapping API key: 9dac7d6acc6400ddf1e63f04790fb15d