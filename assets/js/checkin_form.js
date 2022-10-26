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

  // create a form data object
  const formData = new FormData(form);
  const values = [...formData.entries()];
  const data = Object.fromEntries(formData);

  const db = firebase.firestore();

  // ADDING REVIEW TO FIREBASE DB
  db.collection("reviews").add(data)
    .then(() => {
      console.log("Document successfully written!");

      // FETCH ALL REVIEWS
      console.log("Reviews Output:")
      db.collection("reviews").get().then(doc => {
        const allReviews = doc.docs.map(doc => doc.data());
        console.log(allReviews);

        const list = document.getElementById("result");
        while(list.firstChild) {
          list.removeChild(list.firstChild);
        }
        allReviews.forEach(r => {
          const node = document.createElement('li');
          node.appendChild(document.createTextNode(JSON.stringify(r)))
          list.appendChild(node)
        });
      }).catch(e => {
        console.log("Error", e)
      })
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
});