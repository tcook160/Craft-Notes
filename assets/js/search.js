//section constants

const localBrewSection = document.querySelector('#localBreweriesSection')
const passportSection = document.querySelector('#passportSection')
const checkinSection = document.querySelector('#checkinSection')
const reviewsSection = document.querySelector('#reviewsSection')

//identifies area for search results to be posted
var brewPrintResults = document.getElementById('BreweryList')

//URL for Locquery service in Beer Mapping API
var urlBeerMapping = 'https://beermapping.com/webservice/loccity/9dac7d6acc6400ddf1e63f04790fb15d/'

//By default, the query returns a xml file
//Add this delimiter to the URL to return json file
var jsonDelimiter = "&s=json"

//get id for search bar and brewery list output
const searchBar = document.getElementById('searchbar');
const BreweryList = document.getElementById('BreweryList');

//store beer mapping api response in an array
let BreweryResults = [];

//store user input from search bar
let searchStringCity;

//listen for user input in search bar, user has to press Enter
//user will search for a City where they want to find breweries
searchBar.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        //value must be lowercase to fit search parameters
    searchStringCity = e.target.value.toLowerCase();
    console.log(searchStringCity);

    //hides other sections, makes search results visible
    localBrewSection.classList.remove("hidden")
    checkinSection.classList.add("hidden")
    reviewsSection.classList.add("hidden")
    passportSection.classList.add("hidden")

    loadBreweries();
    }
});

//function to parse through results to json
function loadBreweries() {
    fetch (urlBeerMapping + searchStringCity + jsonDelimiter)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    console.log(data)
    //shows five results at maximum for ui/ux
    for (var i = 0; i < 5; i++) {
        //creates elements to print items
        var brewName = document.createElement('button')
        var brewStreet = document.createElement('p')
        var brewPhone = document.createElement('summary')

        //defining item content to print, references data array
        brewName.textContent = data[i].name;
        brewStreet.textContent = data[i].street + ", " + data[i].state ;
        brewPhone.textContent = 'Tel: ' + data[i].phone;

        //prints items to the page
        brewPrintResults.append(brewName)
        brewPrintResults.append(brewStreet)
        brewPrintResults.append(brewPhone)

        //adds classes for style
        $('#BreweryList button').addClass('button is-info mt-2')

    }
    });
}

// button function to show passport section
const passportEl = document.getElementById('mytravels-button');
function showTravels() {
    localBrewSection.classList.add("hidden")
    checkinSection.classList.add("hidden")
    reviewsSection.classList.add("hidden")
    passportSection.classList.remove("hidden")
}

// button function to show check-in section
const checkinEl = document.getElementById('checkin-button');
function showCheckinForm() {
    localBrewSection.classList.add("hidden")
    passportSection.classList.add("hidden")
    reviewsSection.classList.add("hidden")
    checkinSection.classList.remove("hidden")
}

// button function to show review section
const reviewsEl = document.getElementById('reviews-button');
function showReviews() {
    localBrewSection.classList.add("hidden")
    passportSection.classList.add("hidden")
    checkinSection.classList.add("hidden")
    reviewsSection.classList.remove("hidden")
}

// allows buttons to work
passportEl.addEventListener('click', showTravels)
checkinEl.addEventListener('click', showCheckinForm)
reviewsEl.addEventListener('click', showReviews)




/*

//function will use fetch to call beer mapping API
const loadBreweries = async () => {
    try {
        //Locquery service searches for Locations by querying the location name.
        const res = await fetch(urlBeerMapping + searchStringCity + jsonDelimiter);
        console.log(res);

        //store query results(json file) in an array
        BreweryResults = await res.json();
        console.log(BreweryResults);

        displayBreweries(BreweryResults);
    } catch (err) {
        console.error(err);
    }
};


//Display query results in index.html
const displayBreweries = (breweries) => {

    for (var i = 0; i < 5; i++) {
        var brewSearchResults = BreweryResults[i].name

    }

    const htmlString = breweries
        .map((breweries) => {
            return `
            <li class="breweries">
                <button class="lemon-milk-light button titlebutton is-small"><h3>${breweries.name}</h3></button>
                <p>Street: ${breweries.street}</p>
                <p>Phone: ${breweries.phone}</p>
            </li>
        `;
        })
        .join('');
    BreweryList.innerHTML = htmlString;
};

*/

//value input into the search bar --> lowercase, trim space
// split string into array based on comma as a separator, 
// first array: replace spaces with _, lowercase
// second array: remove space after comma, lowercase

// event listener enter ON search bar
// api search bsed on values put into search bar
// searching with the api beermapping
// return results
    // fetch
    // then
// after getting array/data back --> print that to the local breweries card

// local breweries card - has five different locations that are close to where the user input a location in teh search bar
// user can click on a title --> get more data from array and print it to the column beside it, need the following data: name, address, google maps (optional), hours, etc, if they have a description, etc.
// check in button -- populate brewery name over to the form??? 

// https://beermapping.com/webservice/loccity/9dac7d6acc6400ddf1e63f04790fb15d + value (the search the user inputting into a search bar ) + &s=json