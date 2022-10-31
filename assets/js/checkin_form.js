//create array for all stamp images to be randomly assigned later
var stampArray = new Array();
  stampArray[0] = new Image()
  stampArray[0].src = './assets/media/images/stamps/cn_stamp_001_blue.png'

  stampArray[1] = new Image()
  stampArray[1].src = './assets/media/images/stamps/cn_stamp_001_green.png'

  stampArray[2] = new Image()
  stampArray[2].src = './assets/media/images/stamps/cn_stamp_001_lightblue.png'

  stampArray[3] = new Image()
  stampArray[3].src = './assets/media/images/stamps/cn_stamp_001_lightred.png'

  stampArray[4] = new Image()
  stampArray[4].src = './assets/media/images/stamps/cn_stamp_001_orange.png'

  stampArray[5] = new Image()
  stampArray[5].src = './assets/media/images/stamps/cn_stamp_001_red.png'

  stampArray[6] = new Image()
  stampArray[6].src = './assets/media/images/stamps/cn_stamp_002_blue.png'

  stampArray[7] = new Image()
  stampArray[7].src = './assets/media/images/stamps/cn_stamp_002_darkblue.png'

  stampArray[8] = new Image()
  stampArray[8].src = './assets/media/images/stamps/cn_stamp_002_magenta.png'

  stampArray[9] = new Image()
  stampArray[9].src = './assets/media/images/stamps/cn_stamp_002_orange.png'

  stampArray[10] = new Image()
  stampArray[10].src = './assets/media/images/stamps/cn_stamp_002_pink.png'

  stampArray[11] = new Image()
  stampArray[11].src = './assets/media/images/stamps/cn_stamp_002_red.png'

  stampArray[12] = new Image()
  stampArray[12].src = './assets/media/images/stamps/cn_stamp_003_blue.png'

  stampArray[13] = new Image()
  stampArray[13].src = './assets/media/images/stamps/cn_stamp_003_lightorange.png'

  stampArray[14] = new Image()
  stampArray[14].src = './assets/media/images/stamps/cn_stamp_003_magenta.png'

  stampArray[15] = new Image()
  stampArray[15].src = './assets/media/images/stamps/cn_stamp_003_orange.png'

  stampArray[16] = new Image()
  stampArray[16].src = './assets/media/images/stamps/cn_stamp_003_red.png'
console.log(stampArray)

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
    breweryStamp: stampArray[Math.floor(Math.random()*stampArray.length)]
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

function showTravels() {
  // checks to see if there are any items in local storage
  var brewEntry = JSON.parse(window.localStorage.getItem("brewEntry")) || []

  // prints all stamps in local storage
  for (var i = 0; i < brewEntry.length; i++) {
    var printStamps = document.createElement('img')
    printStamps.img = brewEntry[i].breweryStamp

    stampPassportEl.append(printStamps);
  }

  for (var i = 0; i < brewEntry.length; i++) {
    var printNamesOut = document.createElement('p')
    printNamesOut.img = brewEntry[i].breweryName

    namePassportEl.appendChild(printNamesOut);
    console.log(brewEntry)
  }
}

showTravels()