$(document).on("click", ".stamp", showDetails)

//create array for all stamp images to be randomly assigned later
var stampArray = [
  'cn_stamp_001_blue',
  'cn_stamp_001_green',
  'cn_stamp_001_lightblue',
  'cn_stamp_001_lightred',
  'cn_stamp_001_orange',
  'cn_stamp_001_red',
  'cn_stamp_002_blue',
  'cn_stamp_002_darkblue',
  'cn_stamp_002_magenta',
  'cn_stamp_002_orange',
  'cn_stamp_002_pink',
  'cn_stamp_002_red',
  'cn_stamp_003_blue',
  'cn_stamp_003_lightorange',
  'cn_stamp_003_magenta',
  'cn_stamp_003_orange',
  'cn_stamp_003_red',
]

//definitions of input fields
var formElement = $('#checkin-form');
var breweryElement = $('input[name="brewery_name"]');
var dateOfCheckinElement = $('input[name="date"]');
var brewTypeElement = $('#brewtype');
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
btn.addEventListener('click', async (e) => {
  // prevent the form from submitting
  e.preventDefault();

  var selectionVal = document.getElementById("selectRating").value
  console.log("Rating:", selectionVal);

  //items to be saved to local storage
  var storeName = breweryElement.val()
  var storeDate = dateOfCheckinElement.val()

  //saving items to local storage
  var brewEntry = JSON.parse(window.localStorage.getItem("brewEntry")) || [];

  //creating new entry to local storage to be pushed
  var newBrewEntry = {
    breweryName: storeName,
    breweryDate: storeDate,
    breweryRating: selectionVal,
    breweryStamp: './assets/media/images/stamps/' + stampArray[Math.floor(Math.random()*stampArray.length)] + '.png'
  }
  brewEntry.push(newBrewEntry);
  window.localStorage.setItem('brewEntry', JSON.stringify(brewEntry))

  // create a form data object
  const formData = new FormData(form);
  const values = [...formData.entries()];
  const data = Object.fromEntries(formData);

  const db = firebase.firestore();

  // ADDING REVIEW TO FIREBASE DB
  db.collection("reviews").add(data)
    .then(() => {
      console.log("Document successfully written!");
      $('input[type="text"]').val('');
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
});

// selects id to reference where stamps will go
var stampPassportEl = $('#passportstamps')
var namePassportEl = $('#tempbrewpage')

function showDetails() {
  console.log('clicked')

}

function showTravels() {
  // checks to see if there are any items in local storage
  var brewEntry = JSON.parse(window.localStorage.getItem("brewEntry")) || []

  // prints all stamps in local storage
  for (var i = 0; i < brewEntry.length; i++) {
    var printStamps = document.createElement('img')
    printStamps.src = brewEntry[i].breweryStamp
    $(printStamps).addClass('stamp')
    stampPassportEl.append(printStamps);
    $(printStamps).click(function(i){
      showDetails(i)
    })
  }

  for (var i = 0; i < brewEntry.length; i++) {
    var printNamesOut = document.createElement('li')
    printNamesOut.textContent = brewEntry[i].breweryName

    namePassportEl.append(printNamesOut);
    console.log(brewEntry)
  }
}

showTravels()