var position = 0
var containerEl = document.querySelector(".container")
var prevEl = document.getElementById("btnEl")
console.log(prevEl)
var nextEl = document.querySelector(".next")
var imgEl =  document.getElementById("imgEl")

var imgUrls = ["./assets/media/brewery-img-1.jpg", "./assets/media/brewery-img-2.jpg", "./assets/media/brewery-img-3.jpg", "./assets/media/brewery-img-4.jpg", "./assets/media/brewery-img-5.jpg", "./assets/media/brewery-img-6.jpg","./assets/media/brewery-img-7.jpg", "./assets/media/brewery-img-8.jpg", "./assets/media/brewery-img-9.jpg","./assets/media/brewery-img-10.jpg", "./assets/media/brewery-img-11.jpg", "./assets/media/brewery-img-12.jpg", "./assets/media/brewery-img-13.jpg", "./assets/media/brewery-img-14.jpg"]

imgEl.setAttribute("src", imgUrls[0])

function handleNextClick() {
    position = position +1
    if (position > 13) {
     position = 0
    }
    console.log("next button clicked")
    
    console.log(position)
    imgEl.setAttribute("src", imgUrls[position])

}

function handlePrevClick() {
    console.log("prev button clicked")
    position = position -1
    if (position < 0) {
        position = 13
    }
    console.log(position)
    imgEl.setAttribute("src", imgUrls[position])
}

prevEl.addEventListener("click", handlePrevClick)
nextEl.addEventListener("click", handleNextClick)
