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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
