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

//listen for user input in search bar
//user will search for a City where they want to find breweries
searchBar.addEventListener('keyup', (e) => {
    searchStringCity = e.target.value.toLowerCase();
    console.log(searchStringCity);

    loadBreweries();

});

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
    const htmlString = breweries
        .map((breweries) => {
            return `
            <li class="breweries">
                <h2>${breweries.name}</h2>
                <p>Street:: ${breweries.street}</p>
                <p>Phone: ${breweries.phone}</p>
                <p>&nbsp;</p> 
                <p></p> 
              
            </li>
        `;
        })
        .join('');
    BreweryList.innerHTML = htmlString;
};

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