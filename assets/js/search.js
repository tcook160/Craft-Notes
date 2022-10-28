var urlBeerMapping = 'https://beermapping.com/webservice/loccity/9dac7d6acc6400ddf1e63f04790fb15d/'

var searchEl = $('#searchbar')

function handleSearchFormSubmit(event) {
    event.preventDefault()
    var searchInputVal = document.querySelector('#searchbar').value

    if (!searchInputVal) {
        return
    }
}

var searchInputValModified = searchInputVal.toLowerCase()
var queryString = urlBeerMapping + searchInputValModified + '&s=json'

searchEl.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      
        // code goes here

    }
});


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